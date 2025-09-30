# React 19 featrues

### Compiler

React 19 now includes its own compiler, which will not only speed up performance but also automate certain tedious tasks, reducing the workload for developers.

### Memorization

With React 19's new compiler, there's no longer a need for memorization the process of optimizing components to prevent unnecessary re-renders. Previously, we relied on hooks like `useMemo()` and `useCallback()` for this purpose, but these will now become obsolete.
No longer we need memorization

### MetaData

We no longer need to install third-party packages for SEO and metadata becuase React 19 now offers built-in support for these features. We can place the tags anywhere within the component and it will work for both the client and server.

### Directives

React 19 now includes built-in support for `use cliend` and `use server` directives.

This allows components to be rendered on the server, resulting in imporved SEO, faster page load times, and more straightforward data fetching.

### We do not need to worry about

- forwardRef
- React.lazy
- useContext
- memo
- useEffect
- useCallback
