'use client';

import { m, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CircleCheck as CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? 'service_8aatc9r';
const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_bw1a0pm';
const EMAILJS_KEY      = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? 'nLK03BSJEcEdRPL0q';

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export default function CTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 0.93, 0.93, 0.85]);

  const [form, setForm] = useState<FormState>({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          name:    form.nome,
          company: form.empresa,
          email:   form.email,
          phone:   form.telefone,
          message: form.mensagem,
        },
        EMAILJS_KEY
      );

      setSubmitted(true);
      setTimeout(() => {
        setForm({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
        setSubmitted(false);
      }, 5000);
    } catch {
      setError('Ocorreu um erro ao enviar. Tente novamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <m.div style={{ y: bgY }} className="absolute -top-[15%] -bottom-[15%] left-0 right-0">
        <img
          src="/stoom-locker.webp"
          alt="Contato Stoom"
          className="w-full h-full object-cover"
        />
        <m.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-brand-primary" />
      </m.div>

      <m.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.13, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-highlight rounded-full blur-3xl pointer-events-none"
      />
      <m.div
        animate={{ x: [0, -60, 0], opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:sticky lg:top-32 space-y-8 text-center lg:text-left"
          >
            <div>
              <m.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-highlight/15 border border-brand-highlight/20 rounded-full mb-6 mx-auto lg:mx-0"
              >
                <m.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 bg-brand-highlight rounded-full"
                />
                <span className="text-brand-highlight font-roboto font-medium text-sm">
                  Fale com a Stoom
                </span>
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl lg:text-5xl font-outfit font-bold text-white leading-tight"
              >
                Tenha lockers inteligentes{' '}
                <span className="text-brand-secondary">em sua operação</span>
              </m.h2>
            </div>

            <m.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="text-white/70 font-roboto text-lg leading-relaxed"
            >
              Converse com um de nossos especialistas e descubra como implementar smart lockers.
            </m.p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/15 shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                    className="py-16 text-center space-y-5"
                  >
                    <m.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 14 }}
                      className="w-20 h-20 bg-brand-highlight/15 border-2 border-brand-highlight/30 rounded-full flex items-center justify-center mx-auto"
                    >
                      <CheckCircle size={36} className="text-brand-highlight" />
                    </m.div>

                    <m.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.5 }}
                      className="text-2xl font-outfit font-bold text-white"
                    >
                      Mensagem enviada!
                    </m.h3>

                    <m.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="text-white/70 font-roboto"
                    >
                      Nossa equipe entrará em contato em breve.
                    </m.p>
                  </m.div>
                ) : (
                  <m.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          name: 'nome',
                          label: 'Nome',
                          placeholder: 'Seu nome',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'empresa',
                          label: 'Empresa',
                          placeholder: 'Sua empresa',
                          type: 'text',
                          required: true,
                        },
                      ].map((field, i) => (
                        <m.div
                          key={field.name}
                          initial={{ opacity: 0, y: 12 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.08, duration: 0.45 }}
                        >
                          <label className="block text-xs font-roboto font-medium text-white/70 mb-1.5">
                            {field.label} {field.required && '*'}
                          </label>
                          <input
                            name={field.name}
                            value={form[field.name as keyof FormState]}
                            onChange={handleChange}
                            required={field.required}
                            placeholder={field.placeholder}
                            type={field.type}
                            className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-highlight focus:border-transparent text-brand-primary font-roboto text-sm placeholder:text-white/40 transition-all hover:border-white/25"
                          />
                        </m.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          name: 'email',
                          label: 'E-mail',
                          placeholder: 'seu@empresa.com.br',
                          type: 'email',
                          required: true,
                        },
                        {
                          name: 'telefone',
                          label: 'Telefone',
                          placeholder: '(11) 99999-9999',
                          type: 'tel',
                          required: true,
                        },
                      ].map((field, i) => (
                        <m.div
                          key={field.name}
                          initial={{ opacity: 0, y: 12 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.52 + i * 0.08, duration: 0.45 }}
                        >
                          <label className="block text-xs font-roboto font-medium text-white/70 mb-1.5">
                            {field.label} {field.required && '*'}
                          </label>
                          <input
                            name={field.name}
                            value={form[field.name as keyof FormState]}
                            onChange={handleChange}
                            required={field.required}
                            placeholder={field.placeholder}
                            type={field.type}
                            className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-highlight focus:border-transparent text-brand-primary font-roboto text-sm placeholder:text-white/40 transition-all hover:border-white/25"
                          />
                        </m.div>
                      ))}
                    </div>

                    <m.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.81, duration: 0.45 }}
                    >
                      <label className="block text-xs font-roboto font-medium text-white/70 mb-1.5">
                        Mensagem
                      </label>
                      <textarea
                        name="mensagem"
                        value={form.mensagem}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Conte um pouco sobre sua operação..."
                        className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-highlight focus:border-transparent text-brand-primary font-roboto text-sm placeholder:text-white/40 transition-all resize-none hover:border-white/25"
                      />
                    </m.div>

                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9, duration: 0.45 }}
                    >
                      <m.button
                        whileHover={sending ? {} : { scale: 1.02, y: -2 }}
                        whileTap={sending ? {} : { scale: 0.97 }}
                        type="submit"
                        disabled={sending}
                        className="w-full px-8 py-4 bg-brand-secondary text-black font-roboto font-semibold rounded-sm hover:bg-brand-secondary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-secondary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {sending ? 'Enviando...' : 'Fale com um especialista'}
                        {!sending && (
                          <m.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <Send size={18} />
                          </m.div>
                        )}
                      </m.button>
                    </m.div>

                    {error && (
                      <p className="text-center text-xs text-red-400 font-roboto">{error}</p>
                    )}

                    <m.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="text-center text-xs text-white/40 font-roboto"
                    >
                      Seus dados estão protegidos conforme a LGPD.
                    </m.p>
                  </m.form>
                )}
              </AnimatePresence>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}