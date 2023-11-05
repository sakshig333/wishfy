function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-white font-semibold">Wishfy</h1>
        <ul className="space-x-4">
          <li className="inline-block">
            <a href="/" className="text-white hover:text-blue-200">
              Home
            </a>
          </li>
          <li className="inline-block">
            <a href="/cart" className="text-white hover:text-blue-200">
              Cart
            </a>
          </li>
          <li className="inline-block">
            <a href="/checkout" className="text-white hover:text-blue-200">
              Checkout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
