import Link from 'next/link'
import { PlaneSvg } from '../Icons'

const Logo = () => {
  return (
    <Link href="/" className='flex justify-center items-center gap-2'>
        <PlaneSvg />
        <span className='font-bold'>Your site logo</span>
    </Link>
  )
}

export default Logo