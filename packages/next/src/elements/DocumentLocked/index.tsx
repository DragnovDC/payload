'use client'
import type { ClientUser } from 'payload'

import { Button, Modal, useModal, useTranslation } from '@payloadcms/ui'
import React, { useEffect } from 'react'

import './index.scss'

const modalSlug = 'document-locked'

const baseClass = 'document-locked'

const formatDate = (date) => {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export const DocumentLocked: React.FC<{
  editedAt: Date | null
  handleGoBack: () => void
  isActive: boolean
  onReadOnly: () => void
  onTakeOver: () => Promise<void>
  user?: ClientUser
}> = ({ editedAt, handleGoBack, isActive, onReadOnly, onTakeOver, user }) => {
  const { closeModal, openModal } = useModal()
  const { t } = useTranslation()

  useEffect(() => {
    if (isActive) openModal(modalSlug)
    else closeModal(modalSlug)
  }, [isActive, openModal, closeModal])

  return (
    <Modal className={baseClass} onClose={handleGoBack} slug={modalSlug}>
      <div className={`${baseClass}__wrapper`}>
        <div className={`${baseClass}__content`}>
          <h1>{t('general:documentLocked')}</h1>
          <p>{`${user?.email ?? user?.id} is currently editing this document. If you take over, they will be blocked from continuing to eit, and may also lose unsaved changes.`}</p>
          <p>
            {`Edited since `}
            <strong>{formatDate(editedAt)}</strong>
          </p>
        </div>
        <div className={`${baseClass}__controls`}>
          <Button buttonStyle="secondary" onClick={handleGoBack} size="large">
            {t('general:goBack')}
          </Button>
          <Button
            buttonStyle="secondary"
            onClick={() => {
              onReadOnly()
              closeModal(modalSlug)
            }}
            size="large"
          >
            {t('general:viewReadOnly')}
          </Button>
          <Button
            buttonStyle="primary"
            onClick={() => {
              void onTakeOver()
              closeModal(modalSlug)
            }}
            size="large"
          >
            {t('general:takeOver')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
