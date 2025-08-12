import { Archive, Bell, Edit3, Lightbulb, Trash2 } from 'lucide-react';

export const sidebarItems = [
  { id: 'notes', label: 'Notes', icon: Lightbulb, link: '/notes' },
  { id: 'reminders', label: 'Reminders', icon: Bell, link: '/notes' },
  {
    id: 'edit-labels',
    label: 'Edit labels',
    icon: Edit3,
    link: '/edit-labels',
  },
  { id: 'archive', label: 'Archive', icon: Archive, link: '/archive' },
  { id: 'trash', label: 'Trash', icon: Trash2, link: '/trash' },
];
