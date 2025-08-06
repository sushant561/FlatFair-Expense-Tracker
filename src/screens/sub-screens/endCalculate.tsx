import { HeaderSection } from "../LandingPage/sections/HeaderSection/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection/FooterSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Expense {
  id: number;
  amount: number;
  description: string;
  paidBy: string;
}

interface BalanceMap {
  [key: string]: number;
}

export const EndCalculate = (): JSX.Element => {
  const location = useLocation();
  const numberOfPeople = location.state?.numberOfPeople;
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    paidBy: ""
  });

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const perPersonShare = totalExpenses / numberOfPeople;

  // Calculate balances
  const balances = expenses.reduce((acc: BalanceMap, expense) => {
    const payer = expense.paidBy;
    const amount = expense.amount;
    acc[payer] = (acc[payer] || 0) + amount;
    return acc;
  }, {});

  // Calculate final settlements
  const settlements = Object.entries(balances).map(([person, paid]) => ({
    person,
    balance: paid - perPersonShare
  }));

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;

    try {
      // Get the content element
      const content = contentRef.current;
      
      // Show a loading indicator or message
      const loadingMessage = document.createElement('div');
      loadingMessage.innerText = 'Generating PDF...';
      loadingMessage.style.position = 'fixed';
      loadingMessage.style.top = '50%';
      loadingMessage.style.left = '50%';
      loadingMessage.style.transform = 'translate(-50%, -50%)';
      loadingMessage.style.padding = '10px 20px';
      loadingMessage.style.backgroundColor = 'rgba(0,0,0,0.7)';
      loadingMessage.style.color = 'white';
      loadingMessage.style.borderRadius = '5px';
      loadingMessage.style.zIndex = '9999';
      document.body.appendChild(loadingMessage);

      // Make a copy of the content for PDF generation
      const contentClone = content.cloneNode(true) as HTMLElement;
      contentClone.style.position = 'absolute';
      contentClone.style.left = '-9999px';
      contentClone.style.top = '0';
      contentClone.style.width = `${content.offsetWidth}px`;
      contentClone.style.backgroundColor = 'white';
      contentClone.style.padding = '20px';
      contentClone.style.border = 'none';
      document.body.appendChild(contentClone);

      // Configure html2canvas with better settings
      const canvas = await html2canvas(contentClone, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        imageTimeout: 15000, // Longer timeout for images
        removeContainer: true,
        // Don't set fixed dimensions to capture all content
        onclone: (clonedDoc) => {
          // Make sure all elements are visible and properly sized in the clone
          const clonedElement = clonedDoc.querySelector('[data-pdf-content]') as HTMLElement;
          if (clonedElement) {
            // Make all child elements visible
            Array.from(clonedElement.querySelectorAll('*')).forEach((el: any) => {
              if (el.style) {
                el.style.display = el.style.display === 'none' ? 'none' : '';
              }
            });
          }
        }
      });

      // Remove the clone from the DOM
      document.body.removeChild(contentClone);
      
      // Remove loading message
      document.body.removeChild(loadingMessage);

      // Calculate dimensions
      const imgWidth = 190; // A4 width in mm with margins
      const pageHeight = 277; // A4 height in mm with margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Create PDF with better settings
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      // Add margins
      const margin = 10; // 10mm margins
      
      let heightLeft = imgHeight;
      let position = margin;
      let pageNumber = 1;

      // Add first page
      pdf.addImage(
        canvas.toDataURL('image/png', 1.0), // Use PNG for better quality
        'PNG',
        margin, // Left margin
        position, // Top margin
        imgWidth,
        Math.min(imgHeight, pageHeight - 2 * margin) // Account for margins
      );
      heightLeft -= (pageHeight - 2 * margin);

      // Add subsequent pages if content overflows
      while (heightLeft > 0) {
        pdf.addPage();
        position = margin - (pageHeight - 2 * margin) * pageNumber;
        pdf.addImage(
          canvas.toDataURL('image/png', 1.0),
          'PNG',
          margin, // Left margin
          position, // Adjusted position for current page
          imgWidth,
          imgHeight
        );
        heightLeft -= (pageHeight - 2 * margin);
        pageNumber++;
      }

      pdf.save('expense-summary.pdf');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  const handleAddExpense = () => {
    if (!newExpense.amount || !newExpense.description || !newExpense.paidBy) return;

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        amount: parseFloat(newExpense.amount),
        description: newExpense.description,
        paidBy: newExpense.paidBy
      }
    ]);

    // Reset form
    setNewExpense({
      amount: "",
      description: "",
      paidBy: ""
    });
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-white min-h-screen">
      <HeaderSection />
      
      <main className="flex flex-col items-center justify-center gap-8 px-6 md:px-20 py-32 w-full bg-[#8B1D2C]">
        <Card className="w-full max-w-3xl bg-white shadow-lg">
          <CardContent className="flex flex-col gap-6 p-8">
            {/* Add Expense Form - Not included in PDF */}
            <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg mb-6">
              <input
                type="number"
                placeholder="Amount"
                className="p-2 border rounded w-full"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                className="p-2 border rounded w-full"
                value={newExpense.description}
                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Paid by"
                className="p-2 border rounded w-full"
                value={newExpense.paidBy}
                onChange={(e) => setNewExpense({ ...newExpense, paidBy: e.target.value })}
              />
              <Button 
                onClick={handleAddExpense}
                className="bg-[#8B1D2C] text-white hover:bg-[#8B1D2C]/90 w-full"
              >
                Add Expense
              </Button>
            </div>
            
            {/* Content to be included in PDF */}
            <div 
              ref={contentRef} 
              data-pdf-content 
              className="pdf-content relative p-6 border rounded-lg"
              style={{ minHeight: 'fit-content' }}
            >
              <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-gray900 mb-6">
                Expense Summary ({numberOfPeople} People)
              </h1>

              {/* Expenses List */}
              <div className="space-y-3 mb-6">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-semibold">{expense.description}</p>
                      <p className="text-sm text-gray-600">Paid by {expense.paidBy}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">₹{expense.amount.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-blue-gray900">Total Expenses</h2>
                  <p className="text-3xl font-bold text-blue-600">₹{totalExpenses.toFixed(2)}</p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-blue-gray900">Per Person Share</h2>
                  <p className="text-3xl font-bold text-green-600">₹{perPersonShare.toFixed(2)}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-gray900">Balance Summary</h2>
                <div className="space-y-3">
                  {settlements.map(({ person, balance }) => (
                    <div key={person} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-blue-gray900">{person}</span>
                      {balance > 0 ? (
                        <span className="text-green-600 font-semibold">Should receive ₹{balance.toFixed(2)}</span>
                      ) : (
                        <span className="text-red-600 font-semibold">Should pay ₹{Math.abs(balance).toFixed(2)}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <Button 
                variant="outline"
                className="flex-1 border-2 border-[#8B1D2C] text-[#8B1D2C] hover:bg-[#8B1D2C] hover:text-white transition-colors"
                onClick={handleDownloadPDF}
              >
                Download Summary
              </Button>
              <Button 
                className="flex-1 bg-[#8B1D2C] text-white hover:bg-[#8B1D2C]/90"
                onClick={() => window.location.href = '/'}
              >
                Start New Calculation
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <FooterSection />
    </div>
  );
};