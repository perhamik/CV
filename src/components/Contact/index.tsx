import contact from './Contact.module.scss'

type ContactInfo = {
  email: string
  phone: string
  location: {
    city: string
    country: string
  }
}

type ListItem = {
  type: string
  content: string
}

function clearEmailOrPhone(str: string, type: string) {
  if (!str || !type) return '#'

  return type.includes('phone') ? str.replaceAll(/\W/g, '') : str.trim()
}

function transformToLinkItem(item: ListItem) {
  if (!item.type.includes('phone') && !item.type.includes('email')) {
    return (
      <span className={contact.button}>
        <i data-type={item.type} className={contact.button__icon}></i>
      </span>
    )
  }
  const _phone = item.type.includes('phone') ? 'tel' : null
  const _mail = item.type.includes('email') ? 'mailto' : null
  const _cleared = clearEmailOrPhone(item.content, item.type)
  const href = `${_phone ?? _mail}:${_cleared}`
  return (
    <a
      href={href}
      className={contact.button}
      title={`contact-${_phone ? 'phone' : 'email'}`}
      aria-label={_cleared}
      aria-labelledby={item.type}
    >
      <i data-type={item.type} className={contact.button__icon}></i>
    </a>
  )
}

function transformToList(item: ListItem) {
  return (
    <>
      {transformToLinkItem(item)}
      <p id={item.type} className={contact.text}>
        {item.content}
      </p>
    </>
  )
}

function reMapContactProps(info: ContactInfo) {
  return Object.entries(info).map((_item) => {
    const type: string = _item.at(0) ? _item[0] : ''
    const value = _item.at(1) ? _item.at(1) : ''
    const _ifString = typeof value === 'string' ? value : ''
    const _ifLocation =
      !!value && type.includes('location') && typeof value !== 'string'
        ? Object.values(value).join(', ')
        : ''
    const content: string = _ifLocation.length > 0 ? _ifLocation : _ifString

    return { type, content }
  })
}

export default function Contact({ info }: { info: ContactInfo }) {
  return (
    <ul className={contact.list}>
      {reMapContactProps(info).map((_field, _id) => (
        <li key={_id} className={contact.list__item}>
          {transformToList(_field)}
        </li>
      ))}
    </ul>
  )
}
