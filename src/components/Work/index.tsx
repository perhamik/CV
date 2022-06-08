import Separator from '@/src/components/Separator'
import PageContext from '@/src/context/PageContext'
import { useContext, useMemo, useState } from 'react'
import style from './Work.module.scss'

interface WorkExperience {
  name: string
  location: string
  description: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  highlights: Array<string>
}

type EducationExperience = {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  score: string
  courses: Array<string>
}

type ExperienceProps = {
  work: Array<WorkExperience>
  education: Array<EducationExperience>
}

function isWorkItem(
  item: WorkExperience | EducationExperience
): item is WorkExperience {
  return (item as WorkExperience).name !== undefined
}

function transformFieldsForItem(item: EducationExperience): WorkExperience {
  return {
    name: item.institution,
    location: '',
    description: item.area,
    position: item.studyType,
    url: item.url,
    startDate: item.startDate,
    endDate: item.endDate,
    summary: '',
    highlights: item.courses,
  }
}

function ExperienceItem({
  item,
  index,
}: {
  item: WorkExperience
  index: number
}) {
  const { loading } = useContext(PageContext)

  const formateDate = (start: string, end?: string): string => {
    if (!start) return ''
    const _start = new Date(start).toLocaleString('en', {
      month: 'short',
      year: 'numeric',
    })
    const _end = end
      ? new Date(end).toLocaleString('en', {
          month: 'short',
          year: 'numeric',
        })
      : 'Present'
    return `${_start} - ${_end}`
  }

  const date = useMemo<string>(
    () => formateDate(item.startDate, item.endDate),
    [item.startDate, item.endDate]
  )

  return (
    <li className={style.item} data-index={index} data-loaded={!loading}>
      <span className={style.item__date}>{date}</span>
      <div className={style.item__info}>
        <h5 className={style.position}>{item.position}</h5>
        <ul className={style.highlights}>
          {item.highlights.map((highlight, _id) => {
            return (
              <li key={_id} className={style.highlights__item}>
                {highlight}
              </li>
            )
          })}
        </ul>
        <a href={item.url} target="_blank" className={style.link}>
          {item.name}
        </a>
      </div>
    </li>
  )
}

function Experience({
  scope,
  title,
  indexBegin = 0,
}: {
  scope: Array<WorkExperience> | Array<EducationExperience>
  title: string
  indexBegin?: number
}) {
  return (
    <div key={title} className={style.container}>
      <h4 className={style.title}>{title}</h4>
      <ul className={style.list} data-work={isWorkItem(scope[0])}>
        {scope.map((item, _id) => {
          const exp = !isWorkItem(item) ? transformFieldsForItem(item) : item
          return (
            <ExperienceItem key={_id} item={exp} index={indexBegin + _id + 1} />
          )
        })}
      </ul>
    </div>
  )
}

export default function Work({ work, education }: ExperienceProps) {
  return (
    <>
      <Experience scope={work} title="Work" />
      <Separator dark data-index={8} />
      <Experience
        scope={education}
        title="Education"
        indexBegin={work.length}
      />
    </>
  )
}
