import {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useState,
} from 'react'

export type ContextType = {
  loading: boolean
  separatorCounter: number
  setSeparatorCount?: Dispatch<SetStateAction<number>>
}

const PageContext: Context<ContextType> = createContext({
  loading: true,
  separatorCounter: 0,
})
export default PageContext

export const PageProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [separatorCounter, setSeparatorCount] = useState(0)

  const contextData: ContextType = {
    loading: loading,
    separatorCounter: separatorCounter,
    setSeparatorCount: setSeparatorCount,
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 150)
  }, [])

  return (
    <PageContext.Provider value={contextData}>{children}</PageContext.Provider>
  )
}
