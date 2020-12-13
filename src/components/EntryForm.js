import React from "react"
import entryFormStyles from "./entryForm.module.css"

export default function EntryForm({ children }) {
  return <div className={entryFormStyles.form}>{children}</div>
}
