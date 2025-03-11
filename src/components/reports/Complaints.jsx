import { useState } from "react";
import ComplaintsTable from "./ComplaintsTable";
import ComplaintDetail from "./ComplaintDetail";

const Complaints = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: "Front Door Camera Offline",
      description:
        "The front door security camera has been offline for the past 3 hours, causing a lapse in surveillance.",
      status: "pending",
      date: new Date(),
      location: "Front Door",
      priority: "high",
    },
    {
      id: 2,
      title: "Motion Detected in Backyard",
      description:
        "Unusual motion detected in the backyard at 2:30 AM. No known activity was scheduled at this time.",
      status: "in-progress",
      date: new Date(),
      location: "Backyard",
      priority: "medium",
    },
    {
      id: 3,
      title: "Garage Door Left Open",
      description:
        "The garage door has been left open for over 2 hours. This could pose a security risk.",
      status: "resolved",
      date: new Date(),
      location: "Garage",
      priority: "high",
    },
    {
      id: 4,
      title: "Low Battery on Window Sensor",
      description:
        "The window sensor in the living room is running low on battery. Needs replacement soon.",
      status: "pending",
      date: new Date(),
      location: "Living Room Window",
      priority: "medium",
    },
    {
      id: 5,
      title: "Unknown Person at Door",
      description:
        "An unfamiliar face was detected by the doorbell camera at 11:45 PM. No interaction recorded.",
      status: "pending",
      date: new Date(),
      location: "Front Door",
      priority: "high",
    },
    {
      id: 6,
      title: "WiFi Connectivity Issue",
      description:
        "Home security system is experiencing intermittent WiFi disconnections, affecting real-time monitoring.",
      status: "in-progress",
      date: new Date(),
      location: "Entire House",
      priority: "medium",
    },
    {
      id: 7,
      title: "Basement Flood Sensor Triggered",
      description:
        "Water detected in the basement. Possible leakage or flooding issue.",
      status: "resolved",
      date: new Date(),
      location: "Basement",
      priority: "high",
    },
    {
      id: 8,
      title: "Tampering Detected on Side Window",
      description:
        "Security sensor detected an attempt to open the side window without authorization.",
      status: "pending",
      date: new Date(),
      location: "Side Window",
      priority: "high",
    },
    {
      id: 9,
      title: "Smoke Detected in Kitchen",
      description:
        "The smoke detector in the kitchen has triggered an alert. Possible fire hazard.",
      status: "in-progress",
      date: new Date(),
      location: "Kitchen",
      priority: "high",
    },
    {
      id: 10,
      title: "Unusual Sound Detected",
      description:
        "The indoor microphone detected unusual noises in the living room at 3:00 AM.",
      status: "pending",
      date: new Date(),
      location: "Living Room",
      priority: "medium",
    },
    {
      id: 11,
      title: "Front Door Left Open",
      description:
        "The front door has been left open for over 10 minutes without activity.",
      status: "resolved",
      date: new Date(),
      location: "Front Door",
      priority: "high",
    },
    {
      id: 12,
      title: "Backyard Gate Unlocked",
      description:
        "The backyard gate was detected as unlocked for an extended period.",
      status: "pending",
      date: new Date(),
      location: "Backyard",
      priority: "medium",
    },
    {
      id: 13,
      title: "Glass Break Detected",
      description:
        "A loud sound resembling glass breaking was detected in the dining room.",
      status: "pending",
      date: new Date(),
      location: "Dining Room",
      priority: "high",
    },
    {
      id: 14,
      title: "Temperature Sensor Alert",
      description:
        "The indoor temperature has dropped below the set threshold, indicating a possible heating system issue.",
      status: "in-progress",
      date: new Date(),
      location: "Living Room",
      priority: "medium",
    },
    {
      id: 15,
      title: "CO2 Levels High",
      description:
        "Carbon dioxide levels are higher than normal. Ventilation may be needed.",
      status: "pending",
      date: new Date(),
      location: "Basement",
      priority: "high",
    },
    {
      id: 16,
      title: "Power Outage Detected",
      description:
        "The home security system detected a power outage lasting more than 5 minutes.",
      status: "resolved",
      date: new Date(),
      location: "Entire House",
      priority: "high",
    },
    {
      id: 17,
      title: "Pet Activity Detected",
      description:
        "The pet tracker detected unusual movement in the kitchen late at night.",
      status: "in-progress",
      date: new Date(),
      location: "Kitchen",
      priority: "low",
    },
    {
      id: 18,
      title: "Guest Mode Activated",
      description:
        "Guest mode was enabled remotely. Ensure it was intentional.",
      status: "resolved",
      date: new Date(),
      location: "Security System",
      priority: "medium",
    },
    {
      id: 19,
      title: "Mail Delivered",
      description:
        "The front door camera detected mail being delivered at 2:00 PM.",
      status: "resolved",
      date: new Date(),
      location: "Mailbox",
      priority: "low",
    },
    {
      id: 20,
      title: "Security Code Entered Incorrectly",
      description:
        "An incorrect security code was entered multiple times at the front door keypad.",
      status: "pending",
      date: new Date(),
      location: "Front Door",
      priority: "high",
    }
]
);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const updateStatus = (id, newStatus) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: newStatus } : complaint
      )
    );
  };

  const sendToAll = (complaint) => {
    console.log("Sending complaint to all:", complaint);
  };

  return (
    <div className="">
      <h1 className="text-2xl mb-6 mt-2 lg:text-3xl font-bold text-gray-800">
        Complaints
      </h1>

      {selectedComplaint ? (
        <ComplaintDetail
          complaint={selectedComplaint}
          onBack={() => setSelectedComplaint(null)}
          onUpdateStatus={updateStatus}
          onSendToAll={sendToAll}
        />
      ) : (
        <ComplaintsTable
          complaints={complaints}
          onSelect={setSelectedComplaint}
        />
      )}
    </div>
  );
};

export default Complaints;
