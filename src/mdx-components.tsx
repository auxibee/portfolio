import type { MDXComponents } from 'mdx/types'

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    
    h1 : ({children}) => <h1 style={{ fontSize: '60px' }}>{children}</h1>,
    ...components,
  }
}