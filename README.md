# AI SENSE Portfolio | Kento Kusumoto

> **「AIの圧倒的な速度」と「人間にしか宿せない感性」の融合を形にする。**
> 最新のWeb標準技術を用い、ユーザーの「スクロール」という能動的な体験に呼応するインタラクティブ・ポートフォリオ。

[Live Demo を見る]([あなたのVercel/GitHub PagesのURL])

---

## 🎨 UI/UX Design Philosophy (Apple Aesthetic)

Appleのデザイン哲学である「シンプル・重厚・余白」をベースに、Z世代の直感的な感性を掛け合わせたUI設計を行いました。

-   **Scroll-Driven Micro-interactions:** `View-timeline API` を駆使し、スクロール量に応じてロゴが中央で結合したり、巨大な背景オブジェクト（Big-X）が回転する演出を実装。静的なページにはない「プロダクトを動かしている実感」をユーザーに提供します。
-   **Visual Hierarchy & Typography:** `Plus Jakarta Sans` を採用。大胆な中抜き文字（Text-stroke）と緻密に計算された余白により、情報の優先順位を直感的に認識できるよう構成しました。
-   **Mobile-Focused UX Strategy:** 
    - スマホ閲覧時は情報を詰め込まず、水平スワイプと `IntersectionObserver` を組み合わせた「フォーカス演出」を実装。
    - 中央にあるカードのみを鮮明化・拡大させることで、小さな画面でも視線が迷わないユーザー体験を設計しました。

## 🛠 Technical Achievement

-   **Native Modern CSS:** 外部ライブラリに頼らず、`aspect-ratio` や `view-timeline` などの最新CSSプロパティをフル活用。ブラウザのレンダリング性能を最大化しています。
-   **Smart DOM Animation:** JavaScriptによる監視（IntersectionObserver）とCSS Transitionを高度に連携させ、ヌルッとした滑らかなモーショングラフィックスを実現。
-   **Responsive Refactoring:** メディアクエリを用いて、デスクトップ版の「左右分割レイアウト」からスマホ版の「縦積みスワイプ形式」へ劇的なUI構造の変更を行い、デバイスに最適な形態を追求しました。

---
