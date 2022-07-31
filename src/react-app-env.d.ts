/// <reference types="react-scripts" />

declare namespace App {

  interface ComponentsProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }

  interface HeaderProps extends ComponentsProps {

  }

  interface MainProps extends ComponentsProps {

  }

  interface FooterProps extends ComponentsProps {

  }
}