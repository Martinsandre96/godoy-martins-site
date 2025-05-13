<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finances | Godoy Martins</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-100">
    <div class="flex">
        <!-- Sidebar (same as fleet.html) -->
        <!-- Main Content -->
        <div class="flex-1 p-8">
            <h1 class="text-2xl font-bold mb-6">Financial Management</h1>
            
            <!-- Financial Overview -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-700 mb-2">Monthly Revenue</h3>
                    <p class="text-3xl text-green-600">$3,450.00</p>
                    <p class="text-sm text-gray-500 mt-1">+12% from last month</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-700 mb-2">Monthly Expenses</h3>
                    <p class="text-3xl text-red-600">$1,230.50</p>
                    <p class="text-sm text-gray-500 mt-1">+8% from last month</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-700 mb-2">Net Profit</h3>
                    <p class="text-3xl text-blue-600">$2,219.50</p>
                    <p class="text-sm text-gray-500 mt-1">+15% from last month</p>
                </div>
            </div>

            <!-- Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-700 mb-4">Revenue vs Expenses</h3>
                    <canvas id="revenueChart" height="300"></canvas>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-700 mb-4">Vehicle Utilization</h3>
                    <canvas id="utilizationChart" height="300"></canvas>
                </div>
            </div>

            <!-- Transactions -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex justify-between items-center p-4 border-b">
                    <h3 class="font-semibold text-lg">Recent Transactions</h3>
                    <button id="addTransactionBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
                        <i class="fas fa-plus mr-2"></i> Add Transaction
                    </button>
                </div>
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="transactionsTableBody">
                        <!-- Transactions will be added here dynamically -->
                    </tbody>
                </table>
            </div>

            <!-- Export Button -->
            <div class="mt-6 flex justify-end">
                <button id="exportPdfBtn" class="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-red-700 transition">
                    <i class="fas fa-file-pdf mr-2"></i> Export Monthly Report (PDF)
                </button>
            </div>
        </div>
    </div>

    <script src="../js/finances.js"></script>
</body>
</html>