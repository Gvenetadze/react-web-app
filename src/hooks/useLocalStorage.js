import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? initialValue
  )

  const setStoredValue = newValue => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue]
}
