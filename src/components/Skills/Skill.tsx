import React from 'react'
import styles from './Skills.module.scss'

export type SkillSingle = {
	name: string
	level?: string
	keywords: Array<string>
}

export default function Skill({skill}: {skill: SkillSingle}) {
	return (
		<>
			<h4 className={styles.skill__title}>{skill.name}</h4>
			<ul className={styles.skill__keywords}>
				{skill.keywords.map((keyword, _id) => {
					return (
						<li key={`${_id}_${keyword}`} className={styles.skill__keywords__item}>
							{keyword}
						</li>
					)
				})}
			</ul>
		</>
	)
}
