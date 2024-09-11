import React from "react";
import './FacultyViewDownloadBtn.css';

export default function FacultyViewDownloadBtn({ dropdownVisible, toggleDropdown, downloadTemplate }) {
    // Error handling for missing props
    if (!dropdownVisible || typeof toggleDropdown !== 'function' || typeof downloadTemplate !== 'function') {
        console.error("Required props are missing in FacultyViewDownloadBtn");
        return null; // or return a placeholder UI
    }

    return (
        <div className="download">
            <button className="downloadBtn" onClick={() => toggleDropdown('downloadMenu')}>
                Download <span className="caret">▼</span>
            </button>
            {dropdownVisible.downloadMenu && (
                <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('download1Menu'); }}>
                            Download 1 <span className="caret">▶</span>
                        </a>
                        {dropdownVisible.download1Menu && (
                            <ul className="dropdown-menu nested">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('1.1'); }}>Download 1.1</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('1.2'); }}>Download 1.2</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('1.3'); }}>Download 1.3</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="dropdown-submenu">
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('download2Menu'); }}>
                            Download 2 <span className="caret">▶</span>
                        </a>
                        {dropdownVisible.download2Menu && (
                            <ul className="dropdown-menu nested">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('2.1'); }}>Download 2.1</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('2.2'); }}>Download 2.2</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('2.3'); }}>Download 2.3</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="dropdown-submenu">
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('download3Menu'); }}>
                            Download 3 <span className="caret">▶</span>
                        </a>
                        {dropdownVisible.download3Menu && (
                            <ul className="dropdown-menu nested">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('3.1'); }}>Download 3.1</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('3.2'); }}>Download 3.2</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); downloadTemplate('3.3'); }}>Download 3.3</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            )}
        </div>
    );
}