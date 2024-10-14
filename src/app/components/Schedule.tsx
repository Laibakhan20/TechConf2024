import React from 'react'

const Schedule = () => {
  const scheduleItems = [
    {
      time: '10:00 AM',
      title: 'Opening Keynote',
      description: 'Kickoff the event with an inspiring keynote from the CEO.',
    },
    {
      time: '11:30 AM',
      title: 'Panel: The Future of AI',
      description: 'Join industry leaders to discuss the cutting-edge developments in AI.',
    },
    {
      time: '1:00 PM',
      title: 'Networking Lunch',
      description: 'Enjoy lunch while networking with fellow attendees and speakers.',
    },
    {
      time: '2:30 PM',
      title: 'Workshop: Building with Blockchain',
      description: 'An interactive session on how to create decentralized applications using blockchain technology.',
    },
    {
      time: '4:00 PM',
      title: 'Closing Remarks',
      description: 'Wrap up the event with closing remarks and a look at future trends.',
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Event Schedule</h2>

        {/* Schedule List */}
        <div className="space-y-8">
          {scheduleItems.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start">
              {/* Time */}
              <div className="flex-shrink-0 mr-6">
                <span className="block text-lg font-semibold text-blue-600">{item.time}</span>
              </div>
              
              {/* Event Information */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule