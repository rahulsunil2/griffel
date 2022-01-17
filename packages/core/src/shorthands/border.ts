import type { BorderColorProperty, BorderStyleProperty, BorderWidthProperty } from 'csstype';

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

export function border(width: BorderWidthProperty<GriffelStylesCSSValue>): BorderStyle;
export function border(width: BorderWidthProperty<GriffelStylesCSSValue>, style: BorderStyleProperty): BorderStyle;
export function border(
  width: BorderWidthProperty<GriffelStylesCSSValue>,
  style: BorderStyleProperty,
  color: BorderColorProperty,
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
  ...values: [BorderWidthProperty<GriffelStylesCSSValue>, BorderStyleProperty?, BorderColorProperty?]
): BorderStyle {
  return {
    ...borderWidth(values[0]),
    ...(values[1] && borderStyle(values[1])),
    ...(values[2] && borderColor(values[2])),
  };
}