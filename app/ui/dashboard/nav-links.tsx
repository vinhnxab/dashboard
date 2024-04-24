// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: 'dashboard' },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: 'receipt_long',
  },
  { name: 'Customers', href: '/dashboard/customers', icon: 'how_to_reg' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <>
            <li className='nav-item'>
            <a
              key={link.name}
              href={link.href} 
              
              className="nav-link text-white"
            >
              <i className="material-icons-round opacity-10">{link.icon}</i>
              <span className="nav-link-text ms-2 ps-1">{link.name}</span>
            </a>
            </li>
          </>
        );
      })}
    </>
  );
}
