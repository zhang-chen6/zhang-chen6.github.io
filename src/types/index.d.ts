import { SlateElement } from '@wangeditor/editor'

type ImageElement = SlateElement & {
    src: string
    alt: string
    url: string
    href: string
}
type VideoElement  = SlateElement & {
  src: string
  poster?: string
}
