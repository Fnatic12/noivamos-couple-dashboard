
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateCommitmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateCommitmentModal: React.FC<CreateCommitmentModalProps> = ({ open, onOpenChange }) => {
  const [task, setTask] = useState('');
  const [taskType, setTaskType] = useState('');
  const [description, setDescription] = useState('');
  const [vendor, setVendor] = useState('');
  const [responsible, setResponsible] = useState('');
  const [status, setStatus] = useState('open');

  const handleCreate = () => {
    // Implementation would handle form submission
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white p-0 border-none rounded-lg overflow-hidden">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="font-garamond text-2xl text-noivamos-gold">
            Compromissos do casal
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block font-garamond text-lg text-noivamos-gold mb-2">
                Tarefa
              </label>
              <Input 
                placeholder="Adicione o nome da tarefa" 
                className="bg-gray-200 border-none rounded-md"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block font-garamond text-lg text-noivamos-gold mb-2">
                Tipo da Tarefa
              </label>
              <Input 
                placeholder="Adicione o tipo da tarefa" 
                className="bg-gray-200 border-none rounded-md"
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block font-garamond text-lg text-noivamos-gold mb-2">
                Criar
              </label>
              <Textarea 
                placeholder="Digite a Descrição da Tarefa" 
                className="bg-gray-200 border-none rounded-md min-h-[200px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block font-garamond text-lg text-noivamos-gold mb-2">
                Fornecedor
              </label>
              <Input 
                placeholder="Adicione o Fornecedor" 
                className="bg-gray-200 border-none rounded-md"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block font-garamond text-lg text-noivamos-gold mb-2">
                Responsável
              </label>
              <Input 
                placeholder="Adicione o Responsável pela Tarefa" 
                className="bg-gray-200 border-none rounded-md"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block font-garamond text-lg text-noivamos-gold mb-2">
                Status
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="bg-gray-200 border-none rounded-md">
                  <SelectValue placeholder="Open" />
                </SelectTrigger>
                <SelectContent className="rounded-md">
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2 p-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="bg-transparent border border-noivamos-gold text-noivamos-gold hover:bg-noivamos-gold/10 rounded-md">
            Cancelar
          </Button>
          <Button onClick={handleCreate} className="bg-noivamos-gold hover:bg-amber-500 text-white rounded-md">
            Criar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCommitmentModal;
