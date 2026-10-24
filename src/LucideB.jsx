import { User, Menu, Search } from 'lucide-react';

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <User size={24} />
      <Menu size={24} />
      <Search size={24} />
    </div>
  );
}