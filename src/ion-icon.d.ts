// Lets TSX/JSX accept <ion-icon> as a valid custom element.
// Ionicons is loaded globally via <script> in index.html (module + nomodule build).
import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name?: string;
          // External SVG URL — lets ion-icon load brand logos that
          // aren't in Ionicons' built-in set (e.g. LeetCode).
          src?: string;
        },
        HTMLElement
      >;
    }
  }
}