import { format } from 'date-fns'

interface IDateFormatProps {
  dateString: string
}

export default function DateFormat({ dateString }: IDateFormatProps) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'PPP')}
    </time>
  )
}
