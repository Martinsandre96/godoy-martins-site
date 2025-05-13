<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customers | Godoy Martins</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="bg-gray-100">
    <div class="flex">
        <!-- Sidebar (same as fleet.html) -->
        <!-- Main Content -->
        <div class="flex-1 p-8">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">Customer Management</h1>
                <button id="addCustomerBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
                    <i class="fas fa-plus mr-2"></i> Add Customer
                </button>
            </div>

            <!-- Customer Form -->
            <div id="customerForm" class="bg-white p-6 rounded-lg shadow-md mb-6 hidden">
                <h2 class="text-xl font-semibold mb-4">New Customer</h2>
                <form id="addCustomerForm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Personal Info -->
                        <div class="md:col-span-2">
                            <h3 class="text-lg font-medium mb-3">Personal Information</h3>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Full Name</label>
                            <input type="text" name="name" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Date of Birth</label>
                            <input type="date" name="dob" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Driver License #</label>
                            <input type="text" name="licenseNumber" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">License Expiry</label>
                            <input type="date" name="licenseExpiry" class="w-full p-2 border rounded" required>
                        </div>
                        
                        <!-- Payment Info -->
                        <div class="md:col-span-2 mt-4">
                            <h3 class="text-lg font-medium mb-3">Payment Information</h3>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-gray-700 mb-2">Credit Card Number</label>
                            <input type="text" name="cardNumber" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Expiration Date</label>
                            <input type="text" name="cardExpiry" placeholder="MM/YY" class="w-full p-2 border rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">CVV</label>
                            <input type="text" name="cvv" class="w-full p-2 border rounded" required>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button type="button" id="cancelCustomerBtn" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Cancel</button>
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Save Customer</button>
                    </div>
                </form>
            </div>

            <!-- Customers Table -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver License</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="customersTableBody">
                        <!-- Customers will be added here dynamically -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="../js/customers.js"></script>
</body>
</html>