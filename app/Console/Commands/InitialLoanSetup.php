<?php

namespace App\Console\Commands;

use App\Models\DocumentType;
use App\Models\LoanSubType;
use App\Models\LoanType;
use Illuminate\Console\Command;

class InitialLoanSetup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'initial:loan_setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $loan_types = [
            [
                "title" => "CMSME",
                "sub_types" => [
                    [
                        "title" => "SME Project",
                        "documents" => [
                            [
                                "is_mandatory" => true,
                                "title" => "KYC Form"
                            ],
                            [
                                "is_mandatory" => true,
                                "title" => "DP Form"
                            ],
                            [
                                "is_mandatory" => false,
                                "title" => "NID Form"
                            ]
                        ]
                    ],
                    [
                        "title" => "SME Trading",
                        "documents" => [
                            [
                                "is_mandatory" => true,
                                "title" => "Test DOC 1"
                            ],
                            [
                                "is_mandatory" => true,
                                "title" => "Test Doc 2"
                            ],
                            [
                                "is_mandatory" => false,
                                "title" => "NID Form"
                            ],
                            [
                                "is_mandatory" => false,
                                "title" => "Birth Certificate"
                            ]
                        ]
                    ],
                    [
                        "title" => "SME Service",
                        "documents" => []
                    ],
                    [
                        "title" => "SME Manufacturing",
                        "documents" => []
                    ],
                    [
                        "title" => "SME COVID19",
                        "documents" => []
                    ]
                ]
            ],
            [
                "title" => "TEA",
                "sub_types" => [
                    [
                        "title" => "TEA",
                        "documents" => []
                    ],
                    [
                        "title" => "TEA COVID19",
                        "documents" => []
                    ]
                ]
            ],
            [
                "title" => "CC",
                "sub_types" => [
                    [
                        "title" => "Crop",
                        "documents" => []
                    ],
                    [
                        "title" => "Fisheries",
                        "documents" => []
                    ],
                    [
                        "title" => "Livestock",
                        "documents" => []
                    ],
                    [
                        "title" => "Irrigation Equipment",
                        "documents" => []
                    ],
                    [
                        "title" => "Grain Warehousing & Marketing",
                        "documents" => []
                    ],
                    [
                        "title" => "Agricultural Equipment",
                        "documents" => []
                    ],
                    [
                        "title" => "CC COVID19",
                        "documents" => []
                    ]
                ]
            ],
            [
                "title" => "Microfinance",
                "sub_types" => [
                    [
                        "title" => "Microfinance",
                        "documents" => []
                    ],
                    [
                        "title" => "Microfinance COVID19",
                        "documents" => []
                    ]
                ]
            ],
            [
                "title" => "Import/Export",
                "sub_types" => [
                    [
                        "title" => "Foreign Trading",
                        "documents" => []
                    ],
                    [
                        "title" => "COVID19",
                        "documents" => []
                    ]
                ]
            ],
            [
                "title" => "Others",
                "sub_types" => [
                    [
                        "title" => "Others",
                        "documents" => []
                    ]
                ]
            ],
        ];
        foreach ($loan_types as $loan_type) {
            $lt = new LoanType();
            $lt->title = $loan_type['title'];
            $lt->saveOrFail();
            foreach ($loan_type['sub_types'] as $sub_type) {
                $st = new LoanSubType();
                $st->loan_type_id = $lt->id;
                $st->title = $sub_type['title'];
                $st->saveOrFail();
                foreach ($sub_type['documents'] as $document) {
                    (new DocumentType())
                        ->forceFill([
                            "loan_type_id" => $lt->id,
                            "loan_sub_type_id" => $st->id,
                            "is_mandatory" => $document['is_mandatory'],
                            "title" => $document['title']
                        ])
                        ->saveOrFail();
                }
            }
        }
        return 0;
    }
}
