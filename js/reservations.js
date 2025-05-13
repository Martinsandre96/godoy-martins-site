<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservations | Godoy Martins</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/vanilla-calendar@1.4/build/vanilla-calendar.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="flex">
        <!-- Sidebar (same as fleet.html) -->
        <!-- Main Content -->
        <div class="flex-1 p-8">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">Reservation System</h1>
                <button id="newReservationBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
                    <i class="fas fa-plus mr-2"></i> New Reservation
                </button>
            </div>

            <!-- Reservation Form -->
            <div id="reservationForm" class="bg-white p-6 rounded-lg shadow-md mb-6 hidden">
                <h2 class="text-xl font-semibold mb-4">Create Reservation</h2>
                <form id="addReservationForm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-700 mb-2">Customer</label>
                            <select name="customer" class="w-full p-2 border rounded" required>
                                <option value="">Select Customer</option>
                                <!-- Customers will be loaded here -->
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Vehicle</label>
                            <select name="vehicle" class="w-full p-2 border rounded" required>
                                <option value="">Select Vehicle</option>
                                <!-- Vehicles will be loaded here -->
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Pickup Date</label>
                            <input type="date" name="pickupDate" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Return Date</label>
                            <input type="date" name="returnDate" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Daily Rate ($)</label>
                            <input type="number" name="dailyRate" step="0.01" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Total Amount ($)</label>
                            <input type="number" name="totalAmount" step="0.01" class="w-full p-2 border rounded" readonly>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button type="button" id="cancelReservationBtn" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Create Reservation</button>
                    </div>
                </form>
            </div>

            <!-- Calendar View -->
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <div id="calendar" class="vanilla-calendar"></div>
            </div>

            <!-- Reservations Table -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservation ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="reservationsTableBody">
                        <!-- Reservations will be added here dynamically -->
                    </tbody>
                    <!-- Modal de Contrato -->
<div id="contractModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">Rental Contract #<span id="contractNumber"></span></h3>
            <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
                <h4 class="font-semibold">Customer:</h4>
                <p id="contractCustomer"></p>
                <p id="contractCustomerLicense"></p>
            </div>
            <div>
                <h4 class="font-semibold">Vehicle:</h4>
                <p id="contractVehicle"></p>
                <p id="contractPlate"></p>
            </div>
            <div>
                <h4 class="font-semibold">Rental Period:</h4>
                <p id="contractDates"></p>
                <p id="contractDays"></p>
            </div>
            <div>
                <h4 class="font-semibold">Payment:</h4>
                <p id="contractAmount"></p>
                <p id="contractCard"></p>
            </div>
        </div>

        <!-- Termos do Contrato -->
        <div class="border-t pt-4 mb-6">
            <h4 class="font-semibold mb-2">Terms & Conditions:</h4>
            <ul class="list-disc pl-5 text-sm">
                <li>Smoking in the vehicle will result in a $150 cleaning fee</li>
                <li>Unclean returns will incur a $150 cleaning fee</li>
                <li>Fuel not refilled will be charged at $10 + actual fuel cost</li>
                <li>All tolls, tickets, and fines will be charged post-rental</li>
            </ul>
        </div>

        <div class="flex justify-end space-x-3">
            <button onclick="generatePDF()" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                <i class="fas fa-file-pdf mr-2"></i> Generate Contract
            </button>
            <button onclick="generateInvoice()" class="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                <i class="fas fa-receipt mr-2"></i> Generate Invoice
            </button>
        </div>
    </div>
</div>
                    </table>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vanilla-calendar@1.4/build/vanilla-calendar.min.js"></script>
    <script src="../js/reservations.js"></script>
</body>
</html>