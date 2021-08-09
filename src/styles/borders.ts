import { StyleSheet } from 'react-native'
import theme from '../theme'

export default {
  // Border Colors
  borderTransparent: { borderColor: 'transparent' },
  borderBlack: { borderColor: '#000' },
  borderWhite: { borderColor: '#fff' },
  borderPrimary: { borderColor: theme.colors.primary },
  borderSecondary: { borderColor: theme.colors.secondary },
  borderSuccess: { borderColor: theme.colors.success },
  borderError: { borderColor: theme.colors.error },
  borderWarning: { borderColor: theme.colors.warning },
  borderGray0: { borderColor: theme.colors.gray0 },
  borderGray1: { borderColor: theme.colors.gray1 },
  borderGray2: { borderColor: theme.colors.gray2 },
  borderGray3: { borderColor: theme.colors.gray3 },
  borderGray4: { borderColor: theme.colors.gray4 },
  borderGray5: { borderColor: theme.colors.gray5 },
  // Border Style
  borderSolid: { borderStyle: 'solid' },
  borderDotted: { borderStyle: 'dotted' },
  borderDashed: { borderStyle: 'dashed' },
  // Border Width
  border: { borderWidth: 1 },
  border0: { borderWidth: 0 },
  border2: { borderWidth: 2 },
  border4: { borderWidth: 4 },
  border8: { borderWidth: 8 },
  borderX: { borderRightWidth: 1, borderLeftWidth: 1 },
  borderY: { borderTopWidth: 1, borderBottomWidth: 1 },
  borderT: { borderTopWidth: 1 },
  borderR: { borderRightWidth: 1 },
  borderB: { borderBottomWidth: 1 },
  borderL: { borderLeftWidth: 1 },
  borderE: { borderEndWidth: 1 },
  borderS: { borderStartWidth: 1 },
  borderX0: { borderRightWidth: 0, borderLeftWidth: 0 },
  borderY0: { borderTopWidth: 0, borderBottomWidth: 0 },
  borderT0: { borderTopWidth: 0 },
  borderR0: { borderRightWidth: 0 },
  borderB0: { borderBottomWidth: 0 },
  borderL0: { borderLeftWidth: 0 },
  borderE0: { borderEndWidth: 0 },
  borderS0: { borderStartWidth: 0 },
  borderX2: { borderRightWidth: 2, borderLeftWidth: 2 },
  borderY2: { borderTopWidth: 2, borderBottomWidth: 2 },
  borderT2: { borderTopWidth: 2 },
  borderR2: { borderRightWidth: 2 },
  borderB2: { borderBottomWidth: 2 },
  borderL2: { borderLeftWidth: 2 },
  borderE2: { borderEndWidth: 2 },
  borderS2: { borderStartWidth: 2 },
  borderX4: { borderRightWidth: 4, borderLeftWidth: 4 },
  borderY4: { borderTopWidth: 4, borderBottomWidth: 4 },
  borderT4: { borderTopWidth: 4 },
  borderR4: { borderRightWidth: 4 },
  borderB4: { borderBottomWidth: 4 },
  borderL4: { borderLeftWidth: 4 },
  borderE4: { borderEndWidth: 4 },
  borderS4: { borderStartWidth: 4 },
  borderX8: { borderRightWidth: 8, borderLeftWidth: 8 },
  borderY8: { borderTopWidth: 8, borderBottomWidth: 8 },
  borderT8: { borderTopWidth: 8 },
  borderR8: { borderRightWidth: 8 },
  borderB8: { borderBottomWidth: 8 },
  borderL8: { borderLeftWidth: 8 },
  borderE8: { borderEndWidth: 8 },
  borderS8: { borderStartWidth: 8 },
  // Border Radius
  roundedNone: { borderRadius: 0 },
  roundedSm: { borderRadius: 2 },
  rounded: { borderRadius: 4 },
  roundedLg: { borderRadius: 8 },
  roundedFull: { borderRadius: 9999 },
  roundedTNone: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  roundedRNone: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  roundedBNone: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  roundedLNone: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  roundedTlNone: { borderTopLeftRadius: 0 },
  roundedTrNone: { borderTopRightRadius: 0 },
  roundedBrNone: { borderBottomRightRadius: 0 },
  roundedBlNone: { borderBottomLeftRadius: 0 },
  roundedSNone: { borderTopStartRadius: 0, borderBottomStartRadius: 0 },
  roundedENone: { borderTopEndRadius: 0, borderBottomEndRadius: 0 },
  roundedTsNone: { borderTopStartRadius: 0 },
  roundedTeNone: { borderTopEndRadius: 0 },
  roundedBeNone: { borderBottomEndRadius: 0 },
  roundedBsNone: { borderBottomStartRadius: 0 },
  roundedTSm: { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  roundedRSm: { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  roundedBSm: { borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
  roundedLSm: { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
  roundedTlSm: { borderTopLeftRadius: 2 },
  roundedTrSm: { borderTopRightRadius: 2 },
  roundedBrSm: { borderBottomRightRadius: 2 },
  roundedBlSm: { borderBottomLeftRadius: 2 },
  roundedSSm: { borderTopStartRadius: 2, borderBottomStartRadius: 2 },
  roundedESm: { borderTopEndRadius: 2, borderBottomEndRadius: 2 },
  roundedTsSm: { borderTopStartRadius: 2 },
  roundedTeSm: { borderTopEndRadius: 2 },
  roundedBeSm: { borderBottomEndRadius: 2 },
  roundedBsSm: { borderBottomStartRadius: 2 },
  roundedT: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  roundedR: { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  roundedB: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  roundedL: { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  roundedTl: { borderTopLeftRadius: 4 },
  roundedTr: { borderTopRightRadius: 4 },
  roundedBr: { borderBottomRightRadius: 4 },
  roundedBl: { borderBottomLeftRadius: 4 },
  roundedS: { borderTopStartRadius: 4, borderBottomStartRadius: 4 },
  roundedE: { borderTopEndRadius: 4, borderBottomEndRadius: 4 },
  roundedTs: { borderTopStartRadius: 4 },
  roundedTe: { borderTopEndRadius: 4 },
  roundedBe: { borderBottomEndRadius: 4 },
  roundedBs: { borderBottomStartRadius: 4 },
  roundedTLg: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  roundedRLg: { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  roundedBLg: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  roundedLLg: { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  roundedTlLg: { borderTopLeftRadius: 8 },
  roundedTrLg: { borderTopRightRadius: 8 },
  roundedBrLg: { borderBottomRightRadius: 8 },
  roundedBlLg: { borderBottomLeftRadius: 8 },
  roundedSLg: { borderTopStartRadius: 8, borderBottomStartRadius: 8 },
  roundedELg: { borderTopEndRadius: 8, borderBottomEndRadius: 8 },
  roundedTsLg: { borderTopStartRadius: 8 },
  roundedTeLg: { borderTopEndRadius: 8 },
  roundedBeLg: { borderBottomEndRadius: 8 },
  roundedBsLg: { borderBottomStartRadius: 8 },
  roundedTFull: { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },
  roundedRFull: { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },
  roundedBFull: { borderBottomLeftRadius: 9999, borderBottomRightRadius: 9999 },
  roundedLFull: { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },
  roundedTlFull: { borderTopLeftRadius: 9999 },
  roundedTrFull: { borderTopRightRadius: 9999 },
  roundedBrFull: { borderBottomRightRadius: 9999 },
  roundedBlFull: { borderBottomLeftRadius: 9999 },
  roundedSFull: { borderTopStartRadius: 9999, borderBottomStartRadius: 9999 },
  roundedEFull: { borderTopEndRadius: 9999, borderBottomEndRadius: 9999 },
  roundedTsFull: { borderTopStartRadius: 9999 },
  roundedTeFull: { borderTopEndRadius: 9999 },
  roundedBeFull: { borderBottomEndRadius: 9999 },
  roundedBsFull: { borderBottomStartRadius: 9999 }
} as StyleSheet.NamedStyles<any>
