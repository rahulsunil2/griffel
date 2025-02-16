import * as CSS from 'csstype';

import type { GriffelStylesStrictCSSObject, GriffelStylesCSSValue } from '../types';
import { borderWidth } from './borderWidth';
import { borderStyle } from './borderStyle';
import { borderColor } from './borderColor';

type BorderStyle = Pick<
  GriffelStylesStrictCSSObject,
  | 'borderTopColor'
  | 'borderTopStyle'
  | 'borderTopWidth'
  | 'borderRightColor'
  | 'borderRightStyle'
  | 'borderRightWidth'
  | 'borderBottomColor'
  | 'borderBottomStyle'
  | 'borderBottomWidth'
  | 'borderLeftColor'
  | 'borderLeftStyle'
  | 'borderLeftWidth'
>;

export function border(width: CSS.Property.BorderWidth<GriffelStylesCSSValue>): BorderStyle;
export function border(
  width: CSS.Property.BorderWidth<GriffelStylesCSSValue>,
  style: CSS.Property.BorderStyle,
): BorderStyle;
export function border(
  width: CSS.Property.BorderWidth<GriffelStylesCSSValue>,
  style: CSS.Property.BorderStyle,
  color: CSS.Property.BorderColor,
): BorderStyle;

/**
 * A function that implements expansion for "border" to all sides of an element, it's simplified - check usage examples.
 *
 * @example
 *  border('2px')
 *  border('2px', 'solid')
 *  border('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border
 */
export function border(
  ...values: [CSS.Property.BorderWidth<GriffelStylesCSSValue>, CSS.Property.BorderStyle?, CSS.Property.BorderColor?]
): BorderStyle {
  return {
    ...borderWidth(values[0]),
    ...(values[1] && borderStyle(values[1])),
    ...(values[2] && borderColor(values[2])),
  };
}
