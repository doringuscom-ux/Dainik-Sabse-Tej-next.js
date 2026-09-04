const fs = require('fs');
const file_path = 'd:/Rakesh React/latestnewsharyana/latestnewsharyana/next-app/src/views/AdminDashboard.jsx';
let content = fs.readFileSync(file_path, 'utf8');

const target1 = `    const [newBreakingNews, setNewBreakingNews] = useState('');
    const [editingBreakingNewsId, setEditingBreakingNewsId] = useState(null);
    const [isFetchingBreakingNews, setIsFetchingBreakingNews] = useState(false);`;
const replace1 = `    const [newBreakingNews, setNewBreakingNews] = useState('');
    const [editingBreakingNewsId, setEditingBreakingNewsId] = useState(null);
    const [isFetchingBreakingNews, setIsFetchingBreakingNews] = useState(false);
    const [selectedBreakingNews, setSelectedBreakingNews] = useState([]);`;

const target2 = `    const handleDeleteBreakingNews = async (id) => {
        if (!window.confirm('Are you sure you want to delete this breaking news?')) return;
        try {
            const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
            const res = await fetch('/api/breaking-news/' + id, {
                method: 'DELETE',
                headers: { 'Authorization': \`Bearer \${token}\` }
            });
            if (res.ok) {
                fetchBreakingNews();
            }
        } catch (e) {
            console.error(e);
        }
    };`;
const replace2 = `    const handleDeleteBreakingNews = async (id) => {
        if (!window.confirm('Are you sure you want to delete this breaking news?')) return;
        try {
            const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
            const res = await fetch('/api/breaking-news/' + id, {
                method: 'DELETE',
                headers: { 'Authorization': \`Bearer \${token}\` }
            });
            if (res.ok) {
                fetchBreakingNews();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleBulkDeleteBreakingNews = async () => {
        if (selectedBreakingNews.length === 0) return;
        if (!window.confirm(\`Are you sure you want to delete \${selectedBreakingNews.length} breaking news items?\`)) return;
        
        try {
            const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
            await Promise.all(selectedBreakingNews.map(id => 
                fetch('/api/breaking-news/' + id, {
                    method: 'DELETE',
                    headers: { 'Authorization': \`Bearer \${token}\` }
                })
            ));
            setSelectedBreakingNews([]);
            fetchBreakingNews();
        } catch (e) {
            console.error(e);
        }
    };

    const handleSelectAllBreakingNews = (e) => {
        if (e.target.checked) {
            setSelectedBreakingNews(breakingNewsList.map(item => item._id));
        } else {
            setSelectedBreakingNews([]);
        }
    };

    const handleSelectBreakingNews = (id) => {
        if (selectedBreakingNews.includes(id)) {
            setSelectedBreakingNews(selectedBreakingNews.filter(itemId => itemId !== id));
        } else {
            setSelectedBreakingNews([...selectedBreakingNews, id]);
        }
    };`;

const target3 = `                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col">
                                    <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-700 grid grid-cols-[1fr_100px_120px] gap-4">
                                        <div>Headline Text</div>
                                        <div className="text-center">Status</div>
                                        <div className="text-right">Actions</div>
                                    </div>`;
const replace3 = `                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col">
                                    <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                                        <div className="text-gray-700 font-bold">Manage Headlines</div>
                                        {selectedBreakingNews.length > 0 && (
                                            <button onClick={handleBulkDeleteBreakingNews} className="text-sm bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1 transition-colors">
                                                <Trash2 size={16} /> Delete Selected ({selectedBreakingNews.length})
                                            </button>
                                        )}
                                    </div>
                                    <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-700 grid grid-cols-[40px_1fr_100px_120px] gap-4 items-center">
                                        <div>
                                            <input 
                                                type="checkbox" 
                                                className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500 cursor-pointer"
                                                checked={breakingNewsList.length > 0 && selectedBreakingNews.length === breakingNewsList.length}
                                                onChange={handleSelectAllBreakingNews}
                                            />
                                        </div>
                                        <div>Headline Text</div>
                                        <div className="text-center">Status</div>
                                        <div className="text-right">Actions</div>
                                    </div>`;

const target4 = `                                            breakingNewsList.map((item) => (
                                                <div key={item._id} className="p-4 border-b border-gray-100 flex items-center grid grid-cols-[1fr_100px_120px] gap-4 hover:bg-gray-50">
                                                    <div className="text-gray-800 font-medium truncate" title={item.text}>{item.text}</div>
                                                    <div className="text-center">`;
const replace4 = `                                            breakingNewsList.map((item) => (
                                                <div key={item._id} className="p-4 border-b border-gray-100 flex items-center grid grid-cols-[40px_1fr_100px_120px] gap-4 hover:bg-gray-50">
                                                    <div>
                                                        <input 
                                                            type="checkbox" 
                                                            className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500 cursor-pointer"
                                                            checked={selectedBreakingNews.includes(item._id)}
                                                            onChange={() => handleSelectBreakingNews(item._id)}
                                                        />
                                                    </div>
                                                    <div className="text-gray-800 font-medium truncate" title={item.text}>{item.text}</div>
                                                    <div className="text-center">`;

content = content.replace(target1, replace1);
content = content.replace(target2, replace2);
content = content.replace(target3, replace3);
content = content.replace(target4, replace4);

fs.writeFileSync(file_path, content, 'utf8');
console.log('Success');
