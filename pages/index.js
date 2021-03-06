import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href='/b' as='/a'>
        <a>首页-test</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>测试</a>
      </Link>
    </li>
    <li>
      <Link href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2'>
        <a>post #2</a>
      </Link>
    </li>
  </ul>
)
