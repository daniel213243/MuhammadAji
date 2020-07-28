import Link from 'next/link'

export default function Menu(){
    return (
        <div>
                <a><Link href="/index">Home</Link></a>
                <a><Link href="/berita">Berita</Link></a>
                <a><Link href="/about">About</Link></a>
        </div>
    )
}