// app/home/page.tsx
import Card from "../../components/ui/Card";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Account Progress */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">Account Progress</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none" />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#3b82f6"
                strokeWidth="12"
                fill="none"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * 0.15}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
              85%
            </span>
          </div>
          <div className="mt-4">
            <p className="font-medium">Steps Completed</p>
            <ul className="text-sm text-gray-600">
              <li>✔ Profile Setup</li>
              <li>✔ Initial Training</li>
              <li>✔ Legal Documents</li>
            </ul>
            <p className="font-medium mt-3">Steps Remaining</p>
            <ul className="text-sm text-gray-600">
              <li>• Financial Integration</li>
              <li>• Final Review</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Total Franchisees */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">Total Franchisees Onboard</h2>
        <p className="text-2xl font-bold">14 <span className="text-green-600 text-sm">↑ 7.4%</span></p>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between text-sm"><span>Stage 1 (Inquiry)</span><span>02</span></div>
          <div className="flex justify-between text-sm"><span>Stage 2 (Docs)</span><span>07</span></div>
          <div className="flex justify-between text-sm"><span>Stage 3 (Training)</span><span>05</span></div>
        </div>
      </Card>

      {/* Key Insights */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">Key Insights & Feedback</h2>
        <p className="text-2xl font-bold">10% <span className="text-gray-500 text-sm">Sales Growth</span></p>
        <div className="mt-4 p-3 bg-gray-50 rounded-md text-sm">
          <p className="font-medium">Feedback</p>
          <p className="text-gray-600">Franchisees are requesting more detailed training materials.</p>
        </div>
      </Card>

      {/* Financial Wellbeing */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">Financial Wellbeing</h2>
        <p className="text-xl font-bold">20 <span className="text-green-600 text-sm">↑ 2.1%</span></p>
        <div className="mt-4 flex justify-between text-sm">
          <div><p className="font-medium">Target</p><p>$500,000</p></div>
          <div><p className="font-medium">Current</p><p>$450,000</p></div>
        </div>
      </Card>

      {/* Prospect Leads */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">Prospect Leads</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">Wade Warren</p>
              <p className="text-sm text-gray-500">Stage: Initial Inquiry</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">Ava Wright</p>
              <p className="text-sm text-gray-500">Stage: Initial Inquiry</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">Cody Fisher</p>
              <p className="text-sm text-gray-500">Stage: Initial Inquiry</p>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
}
