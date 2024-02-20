import type {
  ExtendedViewProps,
  ExtendedTextProps,
  ExtendedTextInputProps,
  ExtendedImageProps,
  ExtendedModalProps,
  ExtendedSwitchProps,
  ExtendedFlatListProps,
  ExtendedScrollViewProps,
  ExtendedSectionListProps,
  ExtendedKeyboardAvoidingViewProps,
  ExtendedRefreshControlProps,
  ExtendedImageBackgroundProps,
  ExtendedButtonProps,
  ExtendedPressableProps,
  ExtendedModalBaseProps,
  ExtendedAccessibilityProps,
  ExtendedVirtualizedListProps,
  ExtendedTouchableOpacityProps,
  ExtendedActivityIndicatorProps,
  ExtendedTouchableHighlightProps,
  ExtendedTouchableWithoutFeedbackProps,
  ExtendedTouchableNativeFeedbackProps,
  ConfigBuilder,
} from './types';

export type { ICustomConfig } from './types';

export function View(_props: ExtendedViewProps) {
  return null;
}

export function Text(_props: ExtendedTextProps) {
  return null;
}

export function TextInput(_props: ExtendedTextInputProps) {
  return null;
}

export function Image(_props: ExtendedImageProps) {
  return null;
}

export function Modal(_props: ExtendedModalProps) {
  return null;
}

export function Switch(_props: ExtendedSwitchProps) {
  return null;
}

export function FlatList(_props: ExtendedFlatListProps) {
  return null;
}

export function ScrollView(_props: ExtendedScrollViewProps) {
  return null;
}

export function SectionList(_props: ExtendedSectionListProps) {
  return null;
}

export function KeyboardAvoidingView(
  _props: ExtendedKeyboardAvoidingViewProps
) {
  return null;
}

export function RefreshControl(_props: ExtendedRefreshControlProps) {
  return null;
}

export function ImageBackground(_props: ExtendedImageBackgroundProps) {
  return null;
}

export function Button(_props: ExtendedButtonProps) {
  return null;
}

export function Pressable(_props: ExtendedPressableProps) {
  return null;
}

export function ModalBase(_props: ExtendedModalBaseProps) {
  return null;
}

export function Accessibility(_props: ExtendedAccessibilityProps) {
  return null;
}

export function VirtualizedList(_props: ExtendedVirtualizedListProps) {
  return null;
}

export function TouchableOpacity(_props: ExtendedTouchableOpacityProps) {
  return null;
}

export function ActivityIndicator(_props: ExtendedActivityIndicatorProps) {
  return null;
}

export function TouchableHighlight(_props: ExtendedTouchableHighlightProps) {
  return null;
}

export function TouchableWithoutFeedback(
  _props: ExtendedTouchableWithoutFeedbackProps
) {
  return null;
}

export function TouchableNativeFeedback(
  _props: ExtendedTouchableNativeFeedbackProps
) {
  return null;
}

export function createConfig<T>(config: T & ConfigBuilder): T {
  return config;
}
