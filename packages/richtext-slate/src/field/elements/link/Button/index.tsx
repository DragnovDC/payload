'use client'

import type { FormState } from '@payloadcms/ui'

import { useModal } from '@faceless-ui/modal'
import {
  getFormState,
  reduceFieldsToValues,
  useConfig,
  useDocumentInfo,
  useDrawerSlug,
  useTranslation,
} from '@payloadcms/ui'
import React, { Fragment, useState } from 'react'
import { Editor, Range, Transforms } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'

import { useFieldPath } from '../../../../../../ui/src/forms/FieldPathProvider'
import LinkIcon from '../../../icons/Link'
import { useElementButton } from '../../../providers/ElementButtonProvider'
import ElementButton from '../../Button'
import isElementActive from '../../isActive'
import { LinkDrawer } from '../LinkDrawer'
import { linkFieldsSchemaPath } from '../shared'
import { unwrapLink } from '../utilities'

/**
 * This function is called when an new link is created - not when an existing link is edited.
 */
const insertLink = (editor, fields) => {
  const isCollapsed = editor.selection && Range.isCollapsed(editor.selection)
  const data = reduceFieldsToValues(fields, true)

  const newLink = {
    type: 'link',
    children: [],
    doc: data.doc,
    fields: data.fields, // Any custom user-added fields are part of data.fields
    linkType: data.linkType,
    newTab: data.newTab,
    url: data.url,
  }

  if (isCollapsed || !editor.selection) {
    // If selection anchor and focus are the same,
    // Just inject a new node with children already set
    Transforms.insertNodes(editor, {
      ...newLink,
      children: [{ text: String(data.text) }],
    })
  } else if (editor.selection) {
    // Otherwise we need to wrap the selected node in a link,
    // Delete its old text,
    // Move the selection one position forward into the link,
    // And insert the text back into the new link
    Transforms.wrapNodes(editor, newLink, { split: true })
    Transforms.delete(editor, { at: editor.selection.focus.path, unit: 'word' })
    Transforms.move(editor, { distance: 1, unit: 'offset' })
    Transforms.insertText(editor, String(data.text), { at: editor.selection.focus.path })
  }

  ReactEditor.focus(editor)
}

export const LinkButton: React.FC = () => {
  const { fieldProps } = useElementButton()
  const [initialState, setInitialState] = useState<FormState>({})

  const { t } = useTranslation()
  const editor = useSlate()
  const config = useConfig()

  const { closeModal, openModal } = useModal()
  const drawerSlug = useDrawerSlug('rich-text-link')
  const { id, collectionSlug } = useDocumentInfo()
  const { schemaPath } = useFieldPath()

  const { richTextComponentMap } = fieldProps

  const fieldMap = richTextComponentMap.get(linkFieldsSchemaPath)

  return (
    <Fragment>
      <ElementButton
        className="link"
        format="link"
        onClick={async () => {
          if (isElementActive(editor, 'link')) {
            unwrapLink(editor)
          } else {
            openModal(drawerSlug)
            const isCollapsed = editor.selection && Range.isCollapsed(editor.selection)
            if (!isCollapsed) {
              const data = {
                text: editor.selection ? Editor.string(editor, editor.selection) : '',
              }
              const state = await getFormState({
                apiRoute: config.routes.api,
                body: {
                  id,
                  collectionSlug,
                  data,
                  operation: 'update',
                  schemaPath: `${schemaPath}.${linkFieldsSchemaPath}`,
                },
                serverURL: config.serverURL,
              })
              setInitialState(state)
            }
          }
        }}
        tooltip={t('fields:addLink')}
      >
        <LinkIcon />
      </ElementButton>
      <LinkDrawer
        drawerSlug={drawerSlug}
        fieldMap={Array.isArray(fieldMap) ? fieldMap : []}
        handleClose={() => {
          closeModal(drawerSlug)
        }}
        handleModalSubmit={(fields) => {
          insertLink(editor, fields)
          closeModal(drawerSlug)
        }}
        initialState={initialState}
      />
    </Fragment>
  )
}
