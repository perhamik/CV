import React from 'react'
import PageContext from '@/src/context/PageContext'
import separator from './Separator.module.scss'

interface SeparatorProps {
	index?: number
	light?: boolean | true
	dark?: boolean | true
}

export default function Separator(props: SeparatorProps) {
	const {loading} = React.useContext(PageContext)
	const isLight = !props.dark && props.light !== false

	return (
		<div
			data-index={props.index ?? 1}
			data-type="separator"
			className={separator.line}
			data-loaded={!loading}
			data-theme={isLight ? 'light' : 'dark'}
		></div>
	)
}
