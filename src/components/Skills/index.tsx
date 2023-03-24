import React from 'react'
import Skill, {SkillSingle} from './Skill'
import Separator from '@/src/components/Separator'
import PageContext from '@/src/context/PageContext'
import styles from './Skills.module.scss'

type SkillsProps = {
	skills: Array<SkillSingle>
}

export default function Skills({skills}: SkillsProps) {
	const {loading} = React.useContext(PageContext)

	return (
		<>
			{skills.map((skill, key) => {
				return (
					<React.Fragment key={key}>
						<div data-index={key + 1} className={styles.skill} data-loaded={!loading}>
							<Skill skill={skill} />
						</div>
						<Separator data-index={key + 2} />
					</React.Fragment>
				)
			})}
		</>
	)
}
