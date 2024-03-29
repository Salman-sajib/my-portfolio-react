import { v4 as uuidv4 } from 'uuid';

const navLinks = [
  { id: uuidv4(), name: 'Home', href: '#home' },
  { id: uuidv4(), name: 'About', href: '#about' },
  { id: uuidv4(), name: 'Skills', href: '#skills' },
  { id: uuidv4(), name: 'Projects', href: '#projects' },
];

const Header = () => {
  return (
    <header className='pt-2 px-2 font-openSans'>
      <section className='max-w-[1440px] mx-auto bg-slate-900 shadow-md rounded-full text-gray-50 flex items-center justify-between px-4 py-3 '>
        <span className='logo text-[1.3rem] font-bold font-dancingScript'>
          Salman
        </span>
        <nav>
          <ul className='flex items-center gap-9'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className='text-[.97rem] font-medium px-3 py-[2px] rounded-full hover:bg-gray-50 hover:text-slate-900 focus:bg-gray-50 focus:text-slate-900 transition-all'
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button>
          <a
            className=' px-6 py-2 mx-[-8px] rounded-full bg-gradient-to-tr from-[#a1c4fd] to-[#c2e9fb] text-slate-900 shadow-md'
            href='#'
          >
            Contact me
          </a>
        </button>
      </section>
    </header>
  );
};

export default Header;
