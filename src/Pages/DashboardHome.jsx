export default function DashboardHome(){
    return(
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2"> Overview</h1>
            <p className="text-gray-500 mb-8">Welcome to your dashboard</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              { [
                    { label: 'Total Users', value: '1,284', color: 'blue' },
                    { label: 'Revenue', value: '$8,420', color: 'green' },
                    { label: 'Active Today', value: '342', color: 'purple' },
                    ].map(card => (
                    <div key={card.label}
                    className='bg-white rounded-2xl shadow-sm p-6 border border-gray-100'>
                    <p className='text-sm text-gray-500'>{card.label}</p>
                    <p className='text-3xl font-bold text-gray-800 mt-1'>{card.value}</p>
                    </div>
                ))}


            </div>
        </div>
    )
}