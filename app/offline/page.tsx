export default function OfflinePage() {
    return (
        <main className="flex min-h-screen items-center justify-center p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Không có kết nối mạng
                </h1>

                <p className="mt-3 text-gray-600">
                    Vui lòng kiểm tra kết nối Internet và thử lại.
                </p>
            </div>
        </main>
    );
}