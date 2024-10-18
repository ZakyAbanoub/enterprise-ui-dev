import { render, screen } from 'test/utilities';
import { PackingList } from '.';
import { createStore } from '../packing-list-revisited/store';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';

const renderWithProvuder = (ui: ReactElement) => {
  const store = createStore();
  return render(ui, {
    wrapper: ({ children }) => {
      return <Provider store={store}>{children}</Provider>;
    },
  });
}

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it.only('has the correct title', async () => {
  render(
    <Provider store={createStore()}>
      <PackingList />{' '}
    </Provider>, {
      wrapper: ({ children }) => {
        return <Provider store={createStore()}>{children}</Provider>;
      },
    }
  );
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText('New Item Name');
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInput, 'MacBook Pro');
  expect(addNewItemButton).toBeEnabled();
});

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    const { user } = render(<PackingList />);
    const newItemInput = screen.getByLabelText('New Item Name');
    const addNewItemButton = screen.getByRole('button', {
      name: 'Add New Item',
    });

    await user.type(newItemInput, 'iPad Pro');
    await user.click(addNewItemButton);

    expect(screen.getByLabelText('iPad Pro')).not.toBeChecked();
  },
);
