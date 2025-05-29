import { HeaderSection } from "../LandingPage/sections/HeaderSection/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection/FooterSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export const EndCalculate = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full bg-white min-h-screen">
      <HeaderSection />
      
      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-center gap-8 px-6 md:px-20 py-32 w-full bg-[#8B1D2C]">
        <Card className="w-full max-w-3xl bg-white shadow-lg">
          <CardContent className="flex flex-col gap-6 p-8">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-gray900">
              Expense Calculator
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-gray900">Total Expenses</h2>
                <p className="text-3xl font-bold text-blue-600">₹5,240.00</p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-gray900">Per Person Share</h2>
                <p className="text-3xl font-bold text-green-600">₹1,310.00</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold text-blue-gray900">Settlement Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-gray900">Rahul owes Sushant</span>
                  <span className="font-semibold text-blue-gray900">₹450.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-gray900">Amit owes Priya</span>
                  <span className="font-semibold text-blue-gray900">₹280.00</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <Button 
                variant="outline"
                className="flex-1 border-2 border-[#8B1D2C] text-[#8B1D2C] hover:bg-[#8B1D2C] hover:text-white transition-colors"
              >
                Download Summary
              </Button>
              <Button 
                className="flex-1 bg-[#8B1D2C] text-white hover:bg-[#8B1D2C]/90"
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