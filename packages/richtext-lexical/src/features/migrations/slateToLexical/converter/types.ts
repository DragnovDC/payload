import type { SerializedLexicalNode } from 'lexical'
import type { PayloadComponent } from 'payload'
import type React from 'react'

export type SlateNodeConverter<T extends SerializedLexicalNode = SerializedLexicalNode> = {
  converter: ({
    childIndex,
    converters,
    parentNodeType,
    slateNode,
  }: {
    childIndex: number
    converters: SlateNodeConverter[]
    parentNodeType: string
    slateNode: SlateNode
  }) => T
  nodeTypes: string[]
}

export type SlateNode = {
  [key: string]: any
  children?: SlateNode[]
  type?: string // doesn't always have type, e.g. for paragraphs
}

export type SlateNodeConverterProps = {
  componentKey: string
  featureKey: string
}

export type SlateNodeConverterProvider = {
  ClientConverter: PayloadComponent<SlateNodeConverterProps>
  converter: SlateNodeConverter
}
