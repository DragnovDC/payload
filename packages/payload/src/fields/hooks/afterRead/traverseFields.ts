import type { SanitizedCollectionConfig } from '../../../collections/config/types.js'
import type { SanitizedGlobalConfig } from '../../../globals/config/types.js'
import type { JoinQuery, JsonObject, PayloadRequest, RequestContext } from '../../../types/index.js'
import type { Field, TabAsField } from '../../config/types.js'

import { promise } from './promise.js'

type Args = {
  collection: SanitizedCollectionConfig | null
  context: RequestContext
  currentDepth: number
  depth: number
  doc: JsonObject
  draft: boolean
  fallbackLocale: null | string
  /**
   * fieldPromises are used for things like field hooks. They should be awaited before awaiting populationPromises
   */
  fieldPromises: Promise<void>[]
  fields: (Field | TabAsField)[]
  findMany: boolean
  flattenLocales: boolean
  global: SanitizedGlobalConfig | null
  joins?: JoinQuery
  locale: null | string
  overrideAccess: boolean
  path: (number | string)[]
  populationPromises: Promise<void>[]
  req: PayloadRequest
  schemaPath: string[]
  showHiddenFields: boolean
  siblingDoc: JsonObject
  triggerAccessControl?: boolean
  triggerHooks?: boolean
}

export const traverseFields = ({
  collection,
  context,
  currentDepth,
  depth,
  doc,
  draft,
  fallbackLocale,
  fieldPromises,
  fields,
  findMany,
  flattenLocales,
  global,
  joins,
  locale,
  overrideAccess,
  path,
  populationPromises,
  req,
  schemaPath,
  showHiddenFields,
  siblingDoc,
  triggerAccessControl = true,
  triggerHooks = true,
}: Args): void => {
  fields.forEach((field) => {
    fieldPromises.push(
      promise({
        collection,
        context,
        currentDepth,
        depth,
        doc,
        draft,
        fallbackLocale,
        field,
        fieldPromises,
        findMany,
        flattenLocales,
        global,
        joins,
        locale,
        overrideAccess,
        parentPath: path,
        parentSchemaPath: schemaPath,
        populationPromises,
        req,
        showHiddenFields,
        siblingDoc,
        triggerAccessControl,
        triggerHooks,
      }),
    )
  })
}
