import { useState } from 'react';
import useStore from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Check, Heart, DollarSign, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

const GiveSection = () => {
  const { isGiveModalOpen, openGiveModal, closeGiveModal } = useStore();
  const [donationType, setDonationType] = useState<'one-time' | 'recurring'>('one-time');
  const [amount, setAmount] = useState<string>('');
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const presetAmounts = ['25', '50', '100', '250'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setShowQRCode(true);
      
      // Reset after showing QR code
      setTimeout(() => {
        setShowQRCode(false);
        closeGiveModal();
        setAmount('');
        setSelectedAmount(null);
      }, 10000); // Show QR code for 10 seconds
    }, 1500);
  };

  const handleAmountClick = (value: string) => {
    setSelectedAmount(value);
    setAmount(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setAmount(e.target.value);
  };

  return (
    <section id="give" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="mx-auto h-12 w-12 text-pastel-gold mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>
            <p className="font-opensans text-gray-600 mb-8 leading-relaxed">
              Your generosity enables us to continue our ministry work, maintain our facilities, 
              and support outreach programs that benefit our community and beyond.
            </p>
            <Button 
              onClick={openGiveModal}
              className="bg-pastel-gold hover:bg-amber-500 text-white py-6 px-8 rounded-md shadow-md transition-colors"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Give Today
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['Church Ministries', 'Building Fund', 'Community Outreach'].map((fund, index) => (
              <motion.div
                key={fund}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="font-playfair text-xl font-bold mb-2">{fund}</h3>
                <div className="w-12 h-1 bg-pastel-gold mx-auto mb-4"></div>
                <p className="font-opensans text-sm text-gray-600">
                  Supporting our ongoing mission and ministry efforts in our church and community.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <Dialog open={isGiveModalOpen} onOpenChange={closeGiveModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-center">Make a Donation</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for supporting our church and its mission.
            </DialogDescription>
          </DialogHeader>
          
          {!showQRCode ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Type */}
              <div className="space-y-4">
                <Label className="text-base">Donation Type</Label>
                <RadioGroup 
                  value={donationType} 
                  onValueChange={(value) => setDonationType(value as 'one-time' | 'recurring')}
                  className="flex space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recurring" id="recurring" />
                    <Label htmlFor="recurring">Monthly</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <Label className="text-base">Select Amount</Label>
                <div className="grid grid-cols-4 gap-2">
                  {presetAmounts.map((presetAmount) => (
                    <button
                      key={presetAmount}
                      type="button"
                      onClick={() => handleAmountClick(presetAmount)}
                      className={`py-2 px-4 rounded-md border transition-colors ${
                        selectedAmount === presetAmount
                          ? 'border-pastel-gold bg-pastel-gold/10 text-pastel-gold'
                          : 'border-gray-300 hover:border-pastel-gold'
                      }`}
                    >
                      ${presetAmount}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Custom Amount */}
              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="1"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                    className="pl-7"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-pastel-gold hover:bg-amber-500 text-white"
                disabled={isProcessing || !amount}
              >
                {isProcessing ? 'Processing...' : `Donate${amount ? ` $${amount}` : ''}`}
              </Button>
            </form>
          ) : (
            <div className="p-6 text-center space-y-6 bg-amber-50 rounded-lg">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-pastel-gold mb-4">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Scan to Donate</h3>
                <p className="text-base text-gray-700">
                  Please scan this QR code with your mobile payment app to complete your donation of <span className="font-bold text-pastel-gold">${amount}</span>.
                </p>
                <div className="bg-white p-6 rounded-lg border-4 border-pastel-gold shadow-lg">
                  <div className="aspect-square w-56 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-medium">QR Code Placeholder</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  This QR code will expire in 10 minutes. Thank you for your generosity!
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GiveSection;
