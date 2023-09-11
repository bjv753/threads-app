import Image from 'next/image';
import Link from 'next/link';

function Topbar() {
      return (
      <nav className="topbar">
            <link href="/"  className="flex 
            items-center gap-4">
                  <Image src="/logo.svg" alt="logo" width={28} height={28} />
                  <p className="text-heading3-bold text-light-1" ></p>
            </link>
      </nav>
      )
}

export default Topbar;