import * as CSS from 'csstype';
import type { GriffelStylesStrictCSSObject, GriffelStylesCSSValue } from '../types';

type BorderBottomStyle = Pick<
  GriffelStylesStrictCSSObject,
  'borderBottomWidth' | 'borderBottomStyle' | 'borderBottomColor'
>;

export function borderBottom(width: CSS.Property.BorderWidth<GriffelStylesCSSValue>): BorderBottomStyle;
export function borderBottom(
  width: CSS.Property.BorderWidth<GriffelStylesCSSValue>,
  style: CSS.Property.BorderStyle,
): BorderBottomStyle;
export function borderBottom(
  width: CSS.Property.BorderWidth<GriffelStylesCSSValue>,
  style: CSS.Property.BorderStyle,
  color: CSS.Property.BorderColor,
): BorderBottomStyle;

/**
 * A function that implements expansion for "border-bottom", it's simplified - check usage examples.
 *
 * @example
 *  borderBottom('2px')
 *  borderBottom('2px', 'solid')
 *  borderBottom('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
 */
export function borderBottom(
  ...values: [CSS.Property.BorderWidth<GriffelStylesCSSValue>, CSS.Property.BorderStyle?, CSS.Property.BorderColor?]
): BorderBottomStyle {
  return {
    borderBottomWidth: values[0],
    ...(values[1] && ({ borderBottomStyle: values[1] } as BorderBottomStyle)),
    ...(values[2] && { borderBottomColor: values[2] }),
  };
}
