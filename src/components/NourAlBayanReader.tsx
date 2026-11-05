import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Upload,
  Trash2,
  Maximize2,
  ExternalLink,
  RefreshCw,
  Sparkles,
  Link as LinkIcon,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { savePdfBlob, getPdfBlob, deletePdfBlob } from '../utils/pdfStorage';

const PDF_STORAGE_KEY = 'nour_al_bayan_custom_pdf';
const PDF_NAME_KEY = 'nour_al_bayan_custom_pdf_name';

interface NourAlBayanReaderProps {
  completedLessonIds?: string[];
  onToggleLessonCompleted?: (lessonId: string) => void;
}

export const NourAlBayanReader: React.FC<NourAlBayanReaderProps> = () => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string>('');
  const [pdfUrlInput, setPdfUrlInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);

  // Load persisted PDF from IndexedDB or localStorage URL on mount
  useEffect(() => {
    let active = true;

    const loadSavedPdf = async () => {
      setIsLoading(true);
      try {
        const savedBlob = await getPdfBlob(PDF_STORAGE_KEY);
        if (savedBlob && active) {
          const url = URL.createObjectURL(savedBlob);
          setPdfBlobUrl(url);
          const savedName = localStorage.getItem(PDF_NAME_KEY) || 'Livre_Nouroul_Bayan.pdf';
          setPdfFileName(savedName);
        } else {
          // Check if user saved a direct PDF web URL
          const savedWebUrl = localStorage.getItem('nour_al_bayan_web_url');
          if (savedWebUrl && active) {
            setPdfBlobUrl(savedWebUrl);
            setPdfFileName('Nouroul_Bayan_Lien_Web.pdf');
          }
        }
      } catch (err) {
        console.error('Error loading PDF from storage', err);
      } finally {
        if (active) setIsLoading(false);
      }
    };

    loadSavedPdf();

    return () => {
      active = false;
    };
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setUploadError('Veuillez sélectionner un fichier au format PDF valide.');
      return;
    }

    setUploadError(null);
    setIsLoading(true);

    try {
      // Save into IndexedDB for persistence
      await savePdfBlob(PDF_STORAGE_KEY, file);
      localStorage.setItem(PDF_NAME_KEY, file.name);

      // Create object URL
      if (pdfBlobUrl && pdfBlobUrl.startsWith('blob:')) {
        URL.revokeObjectURL(pdfBlobUrl);
      }

      const newUrl = URL.createObjectURL(file);
      setPdfBlobUrl(newUrl);
      setPdfFileName(file.name);
    } catch (err) {
      console.error('Failed to save uploaded PDF', err);
      setUploadError("Une erreur est survenue lors de l'enregistrement de votre PDF.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfUrlInput.trim()) return;

    const trimmedUrl = pdfUrlInput.trim();
    setPdfBlobUrl(trimmedUrl);
    setPdfFileName('Nouroul_Bayan_En_Ligne.pdf');
    localStorage.setItem('nour_al_bayan_web_url', trimmedUrl);
    setShowUrlInput(false);
  };

  const handleDeletePdf = async () => {
    if (window.confirm('Voulez-vous retirer votre PDF de Nouroul Bayan ?')) {
      await deletePdfBlob(PDF_STORAGE_KEY);
      localStorage.removeItem(PDF_NAME_KEY);
      localStorage.removeItem('nour_al_bayan_web_url');

      if (pdfBlobUrl && pdfBlobUrl.startsWith('blob:')) {
        URL.revokeObjectURL(pdfBlobUrl);
      }

      setPdfBlobUrl(null);
      setPdfFileName('');
      setPdfUrlInput('');
    }
  };

  const toggleFullscreen = () => {
    if (!viewerContainerRef.current) return;

    if (!document.fullscreenElement) {
      viewerContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white rounded-2xl border border-emerald-800/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Support de Cours Personnalisé</span>
            <span aria-hidden="true">·</span>
            <span className="font-arabic text-sm">كِتَابُ نُورِ البَيَان</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Mon Livre de Lecture « NOUROUL BAYAN » (PDF)
          </h2>
          <p className="text-xs text-emerald-100/90 leading-relaxed max-w-2xl">
            Importez et consultez manuellement votre propre exemplaire PDF de Nouroul Bayan pour travailler la lecture et le Tarteel à votre rythme.
          </p>
        </div>

        {/* Action button if PDF is loaded */}
        {pdfBlobUrl && (
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Remplacer par un autre PDF"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Changer de PDF</span>
            </button>

            <button
              onClick={handleDeletePdf}
              className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/30 text-rose-200 text-xs transition-colors cursor-pointer"
              title="Supprimer ce PDF"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* State 1: Loading */}
      {isLoading && (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-sm text-slate-500">
          Chargement de votre document PDF en cours...
        </div>
      )}

      {/* State 2: No PDF uploaded yet -> Sleek Upload Dropzone */}
      {!isLoading && !pdfBlobUrl && (
        <div className="bg-white rounded-2xl border-2 border-dashed border-emerald-300 hover:border-emerald-500 p-8 sm:p-12 text-center space-y-6 transition-colors shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
            <Upload className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Ajoutez votre livre PDF de Nouroul Bayan
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sélectionnez votre fichier PDF depuis votre téléphone ou ordinateur. Il sera automatiquement sauvegardé dans votre navigateur pour vos futures sessions de cours.
            </p>
          </div>

          {uploadError && (
            <div className="p-3 max-w-md mx-auto bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{uploadError}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Choisir mon fichier PDF</span>
            </button>

            <button
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LinkIcon className="w-4 h-4 text-slate-500" />
              <span>Ou coller un lien URL</span>
            </button>
          </div>

          {/* Optional Direct URL Input */}
          {showUrlInput && (
            <form onSubmit={handleUrlSubmit} className="max-w-md mx-auto pt-4 space-y-2 text-xs">
              <input
                type="url"
                required
                value={pdfUrlInput}
                onChange={(e) => setPdfUrlInput(e.target.value)}
                placeholder="https://example.com/nourool_bayan.pdf"
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-mono text-xs focus:bg-white focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                Valider le lien URL du PDF
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-slate-100 max-w-sm mx-auto flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fichier 100% privé, conservé localement sur votre appareil</span>
          </div>
        </div>
      )}

      {/* State 3: PDF is loaded -> Display PDF Viewer */}
      {!isLoading && pdfBlobUrl && (
        <div
          ref={viewerContainerRef}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col"
        >
          {/* Viewer Toolbar */}
          <div className="p-3.5 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 truncate max-w-md">
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-900 truncate">
                {pdfFileName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                title="Plein écran"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Plein écran</span>
              </button>

              <a
                href={pdfBlobUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                title="Ouvrir dans un nouvel onglet"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ouvrir externe</span>
              </a>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center gap-1.5 cursor-pointer font-semibold shadow-sm"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Remplacer</span>
              </button>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="relative w-full h-[700px] sm:h-[820px] bg-slate-200">
            <iframe
              src={pdfBlobUrl}
              title="Livre Nouroul Bayan PDF"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};
