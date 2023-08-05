import { Menu } from '@headlessui/react';

function DropdownMenu() {
  return (
    <Menu>
      <Menu.Button>Menu</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } block px-4 py-2 text-sm`}
              href="#"
            >
              Item 1
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } block px-4 py-2 text-sm`}
              href="#"
            >
              Item 2
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } block px-4 py-2 text-sm`}
              href="#"
            >
              Item 3
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}