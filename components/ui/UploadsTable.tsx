import Avatar from './Avatar'

const rows = [
  { name: 'Tech requirements.pdf', size: '200 KB', type: 'PDF', tag: 'Legal' },
  { name: 'Dashboard screenshot.jpg', size: '720 KB', type: 'IMG', tag: 'Vendors & Assets' },
  { name: 'Dashboard prototype recording.mp4', size: '16 MB', type: 'MP4', tag: 'Technology' },
  { name: 'Financial Overview', size: '4.2 MB', type: 'DOC', tag: 'Financial' },
  { name: 'UX Design Guidelines.docx', size: '400 KB', type: 'DOC', tag: 'Legal' },
  { name: 'Dashboard interaction.aep', size: '12 MB', type: 'AEP', tag: 'Legal' },
  { name: 'Briefing call recording.mp3', size: '18.6 MB', type: 'MP3', tag: 'Financial' },
]

export default function UploadsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500 border-b">
          <tr>
            <th className="p-3 w-8"><input type="checkbox" /></th>
            <th className="p-3">Document Name</th>
            <th className="p-3">Document Type</th>
            <th className="p-3">AI App Inclusion</th>
            <th className="p-3">Dashboard Inclusion</th>
            <th className="p-3">Stage Access</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b last:border-b-0">
              <td className="p-3"><input type="checkbox" /></td>
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">{r.type}</div>
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-gray-500">{r.size}</div>
                  </div>
                </div>
              </td>
              <td className="p-3"><span className="text-xs px-2 py-1 rounded-full border">{r.tag}</span></td>
              <td className="p-3"><label className="inline-flex items-center"><input type="checkbox" defaultChecked className="mr-2"/> </label></td>
              <td className="p-3"><label className="inline-flex items-center"><input type="checkbox" defaultChecked className="mr-2"/> </label></td>
              <td className="p-3">
                <select className="border rounded px-3 py-1">
                  <option>Full</option>
                  <option>Onboarding</option>
                  <option>Franchisee</option>
                  <option>Prospect</option>
                </select>
              </td>
              <td className="p-3">
                <div className="flex gap-3">
                  <button className="text-sm">Delete</button>
                  <button className="text-sm text-blue-600">Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
