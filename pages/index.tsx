import Link from 'next/link';
import Layout from '@/components/Layout';
import {Button} from "@/components/ui/button";
import {Settings} from "lucide-react";
import React from "react";
import {useSettings} from "@/hooks/use-settings";
import {router} from "next/client";

const WelcomePage = () => {
    const settings = useSettings();

  return (
      <Layout>
          <div className="fixed top-4 right-4">
              <Button onClick={settings.onOpen} variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
              </Button>
          </div>
        <div className="flex min-h-screen w-full items-center justify-center text-center">
            <div>
                <div>
                </div>
                <h1 className="text-4xl font-bold">Welcome to Open Quiz</h1>
                <p className="mt-2 text-lg">Created By Supernova3339</p>
                <div className="mt-4 flex justify-center gap-3">
                    <Link href="/quiz">
                        <Button>
                            Start Quiz
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </Layout>
  );
};

export default WelcomePage;
