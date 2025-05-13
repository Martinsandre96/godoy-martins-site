<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fleet Management | Godoy Martins</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="bg-gray-100">
    <div class="flex">
        <!-- Sidebar -->
        <div class="bg-blue-800 text-white w-64 min-h-screen p-4">
            <div class="mb-8 text-center">
                <img src="../images/logo.png" alt="Logo" class="h-12 mx-auto">
            </div>
            <nav>
                <ul class="space-y-2">
                    <li><a href="dashboard.html" class="block py-2 px-4 rounded hover:bg-blue-700"><i class="fas fa-tachometer-alt mr-2"></i> Dashboard</a></li>
                    <li><a href="fleet.html" class="block py-2 px-4 rounded bg-blue-700"><i class="fas fa-car mr-2"></i> Fleet</a></li>
                    <li><a href="customers.html" class="block py-2 px-4 rounded hover:bg-blue-700"><i class="fas fa-users mr-2"></i> Customers</a></li>
                    <li><a href="reservations.html" class="block py-2 px-4 rounded hover:bg-blue-700"><i class="fas fa-calendar-alt mr-2"></i> Reservations</a></li>
                    <li><a href="finances.html" class="block py-2 px-4 rounded hover:bg-blue-700"><i class="fas fa-chart-line mr-2"></i> Finances</a></li>
                </ul>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-8">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">Fleet Management</h1>
                <button id="addVehicleBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
                    <i class="fas fa-plus mr-2"></i> Add Vehicle
                </button>
            </div>

            <!-- Vehicle Form (hidden by default) -->
            <div id="vehicleForm" class="bg-white p-6 rounded-lg shadow-md mb-6 hidden">
                <h2 class="text-xl font-semibold mb-4">Add New Vehicle</h2>
                <form id="addVehicleForm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-700 mb-2">Make</label>
                            <input type="text" name="make" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Model</label>
                            <input type="text" name="model" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Year</label>
                            <input type="number" name="year" min="2000" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">License Plate</label>
                            <input type="text" name="plate" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">VIN</label>
                            <input type="text" name="vin" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Daily Rate ($)</label>
                            <input type="number" name="rate" step="0.01" class="w-full p-2 border rounded" required>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button type="button" id="cancelBtn" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Save Vehicle</button>
                    </div>
                </form>
            </div>

            <!-- Vehicles Table -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plate</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VIN</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="vehiclesTableBody">
                        <!-- Vehicles will be added here dynamically -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="../js/fleet.js"></script>
</body>
</html>